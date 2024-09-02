import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageModal.css';

const LanguageModal = ({ isOpen, onClose }) => {
  const { i18n } = useTranslation();

  if (!isOpen) return null;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="selectlanguage">Select Language</h2>
        <ul className="language-list">
          <li className="language-item" onClick={() => changeLanguage('en')}>English</li>
          <li className="language-item" onClick={() => changeLanguage('es')}>Español</li>
          <li className="language-item" onClick={() => changeLanguage('fr')}>Français</li>
          {/* Add more languages as needed */}
        </ul>
         
      </div>
    </div>
  );
};

export default LanguageModal;
