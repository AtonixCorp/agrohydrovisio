import React, { useEffect } from 'react';
import './LanguageSelector.css';

const LanguageSelector = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (
        !document.querySelector(
          'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
        )
      ) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src =
          '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,es,fr,de,it,ja,zh-CN,ru,af,zu,ig',
          },
          'google_translate_element'
        );
      }
    };

    addGoogleTranslateScript();
  }, []);

  return <div id="google_translate_element"></div>;
};

export default LanguageSelector;
