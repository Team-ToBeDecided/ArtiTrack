import React from "react";

const GoogleTranslate = () => {
  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: "en" },
      "google_translate_element"
    );
  }
  return <div>GoogleTranslate</div>;
};

export default GoogleTranslate;
