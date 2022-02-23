import React, { useState, useMemo } from "react";

import { ITourDates } from "../../models/index";
import { openLink } from "../../utils/helpers";
import Banner from "../Banner";
import Music from "../Music";
import TourDates from "../TourDates";
import MailingList from "../MailingList";
import Contact from "../Contact";
import useStyles from "./Navigation.styles";
import NavigationTabs from "../NavigationTabs";

export enum Tabs {
  Home = "home",
  Dates = "dates",
  Music = "music",
  Merch = "merch",
  Contact = "contact",
  MailingList = "mailing list",
}

interface NavigationProps {
  data: ITourDates;
}

const Navigation = (props: NavigationProps) => {
  const { data } = props;
  const { banner } = data;

  const [tabIndex, setTabIndex] = useState<Tabs>(Tabs.Home);

  const tabs = [
    Tabs.Home,
    Tabs.Music,
    Tabs.Dates,
    Tabs.Merch,
    Tabs.MailingList,
    Tabs.Contact,
  ];

  const tabSelect = (index: Tabs) => {
    index !== Tabs.Merch
      ? setTabIndex(index)
      : openLink("https://douvelle19.bandcamp.com/merch");
  };

  const tabData = useMemo(() => {
    if (tabIndex === Tabs.Home) return <Banner banner={banner} />;
    if (tabIndex === Tabs.Dates) return <TourDates />;
    if (tabIndex === Tabs.Music) return <Music />;
    if (tabIndex === Tabs.MailingList) return <MailingList />;
    if (tabIndex === Tabs.Contact) return <Contact />;
  }, [tabIndex]);

  const classes = useStyles();

  return (
    <div className={classes.navigation}>
      <NavigationTabs currentTab={tabIndex} tabs={tabs} onPress={tabSelect} />
      <div className={classes.navigationData}>{tabData}</div>
    </div>
  );
};

export default Navigation;
