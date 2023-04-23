document.addEventListener('DOMContentLoaded', function () {
    var languageSwitch = document.getElementById('language-switch');
    var currentLanguage = 'en';
  
    languageSwitch.addEventListener('click', function () {
      currentLanguage = currentLanguage === 'en' ? 'tr' : 'en';
      switchLanguage(currentLanguage);
      languageSwitch.textContent = currentLanguage === 'en' ? 'Türkçe' : 'English';
    });
  
    function switchLanguage(lang) {
      var elements = document.querySelectorAll('[data-lang]');
      elements.forEach(function (element) {
        element.style.display = element.getAttribute('data-lang') === lang ? '' : 'none';
      });
    }
  
    // Set the initial language
    switchLanguage(currentLanguage);
  });
  