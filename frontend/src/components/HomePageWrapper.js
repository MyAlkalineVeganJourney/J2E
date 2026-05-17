import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { UserProvider } from '../contexts/UserContext';
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
