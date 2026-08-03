(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var ARCADE = '8bit';

  function savedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      return null;
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
