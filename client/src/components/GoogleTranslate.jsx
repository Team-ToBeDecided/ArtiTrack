// import React, { useEffect } from 'react';

// const GoogleTranslate = () => {
//   const googleTranslateElementInit = () => {
//     new window.google.translate.TranslateElement(
//       {
//         pageLanguage: 'en',
//         layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT
//       },
//       'google_translate_element'
//     );
//   };

//   useEffect(() => {
//     const addScript = document.createElement('script');
//     addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     addScript.async = true;

//     addScript.onload = () => {
//       console.log('Script loaded successfully');
//       window.googleTranslateElementInit = googleTranslateElementInit;
//     };

//     addScript.onerror = () => {
//       console.error('Error loading script');
//     };

//     try {
//       document.body.appendChild(addScript);
//     } catch (error) {
//       console.error('Error appending script to body:', error);
//     }

//     // Cleanup
//     return () => {
//       document.body.removeChild(addScript);
//     };
//   }, []);

//   console.log('After script load');

//   return <div id="google_translate_element"></div>;
// };


import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        // // layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT
        includedLanguages: 'hi,ur,en',

        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,

        // includedLanguages: 'hi,ur,en',
        // layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT
        // layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      },
      'google_translate_element'
    );
  };

  useEffect(() => {
    googleTranslateElementInit();
  }, []);

  return <div id="google_translate_element"></div>;
};



export default GoogleTranslate;


// previous version


// // src/GoogleTranslate.js
// import React from 'react';
// import Script from 'react-load-script';

// class GoogleTranslate extends React.Component {
//   handleScriptLoad = () => {
//     // Define the Google Translate element
//     new window.google.translate.TranslateElement(
//       {pageLanguage: 'en'},
//       'google_translate_element');
//   };

//   render() {
//     return (
//       <div>
//         <div id="google_translate_element" />
//         <Script
//           url="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//           onLoad={this.handleScriptLoad}
//         />
//       </div>
//     );
//   }
// }

// export default GoogleTranslate;
