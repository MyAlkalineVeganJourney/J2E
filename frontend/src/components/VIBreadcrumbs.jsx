import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const VIBreadcrumbs = ({ currentPage, currentPageKey, parentPage, parentPageKey }) => {
  const { t } = useTranslation();

  const breadcrumbs = [
    { path: '/', label: t('common.home', 'Home'), icon: '🏠', linkable: true },
    { path: '/VibrationalIntelligence', label: t('common.vibrationalIntelligence', 'Vibrational Intelligence'), icon: '🔮', linkable: true }
  ];

  if (parentPage) {
    breadcrumbs.push({
      path: parentPage.path,
      label: t(parentPageKey, parentPage.label),
      icon: parentPage.icon,
      linkable: true
    });
  }

  breadcrumbs.push({
    path: null,
    label: t(currentPageKey, currentPage),
    icon: null,
    linkable: false
  });

  return (
    <div style={{
      maxWidth: '1400px',
      margin: '20px auto',
      padding: '0 20px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '8px',
      fontSize: '0.9rem'
    }}>
      {breadcrumbs.map((crumb, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <span style={{ color: '#FFD700' }}>→</span>}
          {crumb.linkable ? (
            <Link
              to={crumb.path}
              style={{
                color: '#FFD700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              {crumb.icon && <span>{crumb.icon}</span>}
              <span>{crumb.label}</span>
            </Link>
          ) : (
            <span style={{ color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              {crumb.icon && <span>{crumb.icon}</span>}
              <span>{crumb.label}</span>
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default VIBreadcrumbs;
