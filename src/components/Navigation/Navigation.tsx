import React, { useState, useMemo } from "react";

import useStyles from "./Navigation.styles";
import NavigationTabs from "../NavigationTabs";

export enum Tabs {
  Home = "home",
  TourDates = "tour dates",
  Edits = "edits",
  Music = "music",
  Streaming = "streaming",
  Merch = "merch",
}

const Navigation = () => {
  const [tabIndex, setTabIndex] = useState<Tabs>(Tabs.Home);

  const tabs = [
    Tabs.Home,
    Tabs.TourDates,
    Tabs.Edits,
    Tabs.Music,
    Tabs.Streaming,
    Tabs.Merch,
  ];

  const openMerch = () => window.open("https://douvelle19.bandcamp.com/merch");

  const tabSelect = (index: Tabs) => {
    index !== Tabs.Merch ? setTabIndex(index) : openMerch();
  };

  const tabData = useMemo(() => {
    if (tabIndex === Tabs.Home) return <div>home content</div>;
    if (tabIndex === Tabs.TourDates) return <div>tour dates content</div>;
    if (tabIndex === Tabs.Edits) return <div>edits content</div>;
    if (tabIndex === Tabs.Music) return <div>music content</div>;
    if (tabIndex === Tabs.Streaming) return <div>streaming content</div>;
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
