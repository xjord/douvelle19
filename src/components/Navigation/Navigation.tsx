import React, { useState, useMemo } from "react";

import { ITourDates } from "../../models/index";
import { openInTab } from "../../utils/helpers";
import Banner from "../Banner";
import TourDates from "../TourDates";
import useStyles from "./Navigation.styles";
import NavigationTabs from "../NavigationTabs";

export enum Tabs {
  Home = "home",
  Dates = "dates",
  Edits = "edits",
  Music = "music",
  Streaming = "streaming",
  Merch = "merch",
}

interface NavigationProps {
  data: ITourDates;
}

const Navigation = (props: NavigationProps) => {
  const { data } = props;
  const { tourDates } = data;

  const [tabIndex, setTabIndex] = useState<Tabs>(Tabs.Home);

  const tabs = [
    Tabs.Home,
    Tabs.Dates,
    Tabs.Edits,
    Tabs.Music,
    Tabs.Streaming,
    Tabs.Merch,
  ];

  const tabSelect = (index: Tabs) => {
    index !== Tabs.Merch
      ? setTabIndex(index)
      : openInTab("https://douvelle19.bandcamp.com/merch");
  };

  const tabData = useMemo(() => {
    if (tabIndex === Tabs.Home) return <Banner />;
    if (tabIndex === Tabs.Dates) return <TourDates dates={tourDates} />;
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
