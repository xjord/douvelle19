import React from "react";

import { Tabs } from "../Navigation/Navigation";
import useStyles from "./NavigationTabs.styles";

interface NavigationTabsProps {
  currentTab?: Tabs;
  tabs?: Tabs[];
  onPress: (step: Tabs) => void;
}

const NavigationTabs = (props: NavigationTabsProps) => {
  const { currentTab, tabs, onPress } = props;

  const classes = useStyles();

  //TODO: isActive styling currentTab === index

  return (
    <div className={classes.wrapper}>
      {tabs?.map((step, index) => {
        return (
          <div
            key={index}
            className={classes.tab}
            onClick={() => onPress(step)}
          >
            {step}
          </div>
        );
      })}
    </div>
  );
};

export default NavigationTabs;
