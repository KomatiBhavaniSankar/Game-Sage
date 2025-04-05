import React, { useEffect } from 'react';

const AutoAds = () => {
  useEffect(() => {
    // Create script element for Auto Ads
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

    // Append the script to the head of the document
    document.head.appendChild(script);

    // Add the Auto Ads config after the script is loaded
    script.onload = () => {
      const autoAdsScript = document.createElement('script');
      autoAdsScript.innerHTML = `
        (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-5929814167149293",
          enable_page_level_ads: true
        });
      `;
      document.head.appendChild(autoAdsScript);
    };

    // Cleanup by removing the script when component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default AutoAds;
