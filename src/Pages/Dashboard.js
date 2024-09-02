import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCog, FaBell, FaBars, FaSignOutAlt, FaGlobe } from 'react-icons/fa';
import KeyMetrics from '../components/KeyMetrics';
import DataVisualization from '../components/DataVisualization';
import DataTable from '../components/DataTable';
import LanguageModal from '../components/LanguageModal';
import MusicFooter from '../components/MusicFooter';
import '../components/Dashboard.css';
import i18n from '../i18n'; // Import i18n

const Dashboard = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default to closed
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userName = 'Samyak Jain';

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isSidebarOpen]);

  const getUserInitials = (name) => {
    return name.split(' ').map((n) => n[0]).join('');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getLanguageName = (lng) => {
    switch (lng) {
      case 'en':
        return 'English';
      case 'es':
        return 'Español';
      case 'fr':
        return 'Français';
      // Add more languages as needed
      default:
        return 'English';
    }
  };

  return (
    <div className="dashboard" data-testid="dashboard">
      {/* Blurred background effect */}
      <div className="blur-background" data-testid="blur-background">
        <div className="blur-background-inner">
          <div className="ColorBlobs_SpinningGradient__DpGtx"></div>
        </div>
      </div>
  
      <header className="header">
        <FaBars className="hamburger" onClick={toggleSidebar} aria-label="hamburger" />
        <div className="logo">CompanyName</div>
        <div className="headerIcons">
          <FaCog className="icon" />
          <FaBell className="icon" />
          <span className="user">{getUserInitials(userName)}</span>
        </div>
      </header>
      <div className={`main ${isSidebarOpen ? '' : 'sidebar-collapsed'}`}>
        <nav className={`sidebar ${isSidebarOpen ? '' : 'collapsed'}`}>
          <div className="sidebarHeader"></div>
          <div className="links">
            <a href="#songs" className="link">{t('Home')}</a>
            <a href="#artists" className="link">{t('artists')}</a>
            <a href="#albums" className="link">{t('albums')}</a>
            <a href="#playlists" className="link">{t('playlists')}</a>
            <a href="#readme" className="link">{t('Developer')}</a>
          </div>
          <div className="sidebarFooter">
            <FaSignOutAlt className="icon" /> {t('logout')}
          </div>
          <div className="Localization" onClick={openModal}>
            <FaGlobe className="icon" /> {getLanguageName(i18n.language)}
          </div>
          <div className="spacer"></div> {/* Add spacer element */}
        </nav>
        <div className="content">
          <KeyMetrics />
          <DataVisualization filterData={setFilter} />
          <DataTable filter={filter} />
        </div>
      </div>
      <LanguageModal isOpen={isModalOpen} onClose={closeModal} />
      <MusicFooter />
    </div>
  );  
};

export default Dashboard;
