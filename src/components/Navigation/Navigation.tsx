import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import NavigationTabs from '../NavigationTabs';
import { NavigationWrapper, NavigationHamburger } from './Navigation.styles';

export enum Tabs {
  Home = '',
  Music = 'music',
  Photos = 'photos',
  Videos = 'videos',
  Dates = 'dates',
  Merch = 'merch',
  Contact = 'contact',
  News = 'news',
}

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [Tabs.Home, Tabs.Music, Tabs.Photos, Tabs.Videos, Tabs.Dates, Tabs.Merch, Tabs.News, Tabs.Contact];

  useEffect(() => {
    // Disable scrolling if mobile menu open
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
  }, [mobileMenuOpen]);

  return (
    <NavigationWrapper>
      <NavigationHamburger>
        <FontAwesomeIcon
          icon={mobileMenuOpen ? faCircleXmark : faBars}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          width={16}
        />
      </NavigationHamburger>
      <NavigationTabs tabs={tabs} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </NavigationWrapper>
  );
};

export default Navigation;
