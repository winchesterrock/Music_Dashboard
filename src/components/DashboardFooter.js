// components/DashboardFooter.js
import React from 'react';

function DashboardFooter() {
  const footerStyles = {
    footerContainer: {
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '325px', // Match the width of the sidebar
      padding: '5px',
      borderRadius: '16px',
      background: ' #000',
      color: 'white',
      display: 'flex',
      flexDirection: 'column', // Stack the links vertically
      alignItems: 'flex-start', // Align links to the start of the container
    },
    footerLink: {
      display: 'block',
      padding: '20px',
      color: 'white',
      textDecoration: 'none',
      marginBottom: '15px',
      fontSize: '1.5em',
    },
  };

  return (
    <div style={footerStyles.footerContainer}>
      <a href="/logout" style={footerStyles.footerLink}>Logout</a>
      <a href="/language" style={footerStyles.footerLink}>Language</a>
    </div>
  );
}

export default DashboardFooter;
