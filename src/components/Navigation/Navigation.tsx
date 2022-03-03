import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { ITourDates } from '../../models/index';
import Banner from '../Banner';
import Music from '../Music';
import Videos from '../Videos';
import TourDates from '../TourDates';
import MailingList from '../MailingList';
import Contact from '../Contact';
import useStyles from './Navigation.styles';
import NavigationTabs from '../NavigationTabs';
import Merch from '../Merch';

export enum Tabs {
  Home = 'home',
  Dates = 'dates',
  Music = 'music',
  Videos = 'videos',
  Merch = 'merch',
  Contact = 'contact',
  MailingList = 'mailing list',
}

interface NavigationProps {
  data: ITourDates;
}

const Navigation = (props: NavigationProps) => {
  const { data } = props;
  const { banner, contacts, merch, videos } = data;

  const [tabIndex, setTabIndex] = useState<Tabs>(Tabs.Home);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [Tabs.Home, Tabs.Music, Tabs.Videos, Tabs.Dates, Tabs.Merch, Tabs.MailingList, Tabs.Contact];

  const tabSelect = (index: Tabs) => setTabIndex(index);

  const tabData = useMemo(() => {
    if (tabIndex === Tabs.Home) return <Banner banner={banner} />;
    if (tabIndex === Tabs.Dates) return <TourDates />;
    if (tabIndex === Tabs.Music) return <Music />;
    if (tabIndex === Tabs.Videos) return <Videos videos={videos} />;
    if (tabIndex === Tabs.Merch) return <Merch merch={merch} />;
    if (tabIndex === Tabs.MailingList) return <MailingList />;
    if (tabIndex === Tabs.Contact) return <Contact contacts={contacts} />;
  }, [tabIndex]);

  const classes = useStyles();

  return (
    <div className={classes.navigation}>
      <FontAwesomeIcon
        className={classes.navigationHamburger}
        icon={mobileMenuOpen ? faCircleXmark : faBars}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      <NavigationTabs currentTab={tabIndex} tabs={tabs} onPress={tabSelect} mobileMenuOpen={mobileMenuOpen} />
      <div className={classes.navigationData}>{tabData}</div>
    </div>
  );
};

export default Navigation;
