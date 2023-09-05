import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function DesktopView() {
  return (
    <div className="desktop-landing-page">
      <h1>India's Most-loved Movie App</h1>
      <p>Download the app now!</p>
      <p>Avalable At</p>
      <div className="download-buttons">
        <span>Apple Store</span><FontAwesomeIcon icon={faApple} style={{ color: "#a507df" }} />
        <span>Play Store</span><FontAwesomeIcon icon={faGooglePlay} style={{ color: "#b23dc2" }} />
      </div>
    </div>
  );
}

export default DesktopView;
