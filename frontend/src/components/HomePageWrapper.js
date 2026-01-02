import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from '../contexts/LanguageContext';
import { UserProvider } from '../contexts/UserContext';
import i18n from '../i18n/config';
import HomePage from '../Pages/HomePage';

const HomePageWrapper = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <UserProvider>
        <LanguageProvider>
          <HomePage />
        </LanguageProvider>
      </UserProvider>
    </I18nextProvider>
  );
};

export default HomePageWrapper;
