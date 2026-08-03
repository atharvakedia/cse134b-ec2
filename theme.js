/* theme.js — the one JavaScript enhancement for the 8-bit extra credit.
 *
 * An "Insert coin" button in the header switches the page between the
 * default style and 8-bit arcade mode, and the choice is remembered in
 * localStorage. Loaded synchronously in <head> so a saved choice applies
 * before first paint (no flash of the wrong theme).
 *
 * Progressive enhancement: the button ships with the `hidden` attribute
 * and is only revealed here, so a visitor without JavaScript never sees
 * a control that does nothing. All page content works without this file.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var ARCADE = '8bit';

  function savedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      return null; // storage blocked (private mode etc.) — default theme
    }
  }

  function rememberTheme(value) {
    try {
      if (value) {
        localStorage.setItem(STORAGE_KEY, value);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (err) {
      /* not fatal — the toggle still works for this page view */
    }
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    var themeColor = document.querySelector('meta[name="theme-color"]');
    if (theme === ARCADE) {
      root.setAttribute('data-theme', ARCADE);
    } else {
      root.removeAttribute('data-theme');
    }
    if (themeColor) {
      themeColor.setAttribute('content', theme === ARCADE ? '#10142c' : '#fafaf7');
    }
  }

  function syncButton(button, label) {
    var arcadeOn = document.documentElement.getAttribute('data-theme') === ARCADE;
    button.setAttribute('aria-pressed', String(arcadeOn));
    label.textContent = arcadeOn
      ? 'Eject — standard mode'
      : 'Insert coin — 8-bit mode';
  }

  // Apply any saved choice immediately (script runs before <body> parses).
  applyTheme(savedTheme());

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('theme-toggle');
    var label = document.getElementById('theme-toggle-label');
    if (!button || !label) {
      return;
    }

    button.removeAttribute('hidden');
    syncButton(button, label);

    button.addEventListener('click', function () {
      var arcadeOn = document.documentElement.getAttribute('data-theme') === ARCADE;
      var next = arcadeOn ? null : ARCADE;
      applyTheme(next);
      rememberTheme(next);
      syncButton(button, label);
    });
  });
})();
