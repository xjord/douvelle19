import React from 'react';

import { Tabs } from '../Navigation/Navigation';
import useStyles from './NavigationTabs.styles';

interface NavigationTabsProps {
  currentTab?: Tabs;
  tabs?: Tabs[];
  onPress: (step: Tabs) => void;
  mobileMenuOpen?: boolean;
}

const NavigationTabs = (props: NavigationTabsProps) => {
  const { currentTab, tabs, onPress, mobileMenuOpen = false } = props;

  const classes = useStyles(props);

  return (
    <div className={classes().navigationTabs}>
      {tabs?.map((step, index) => {
        const isActive = currentTab === step;
        return (
          <div key={index} className={classes().tab} onClick={() => onPress(step)}>
            {step}
          </div>
        );
      })}
    </div>
  );
};

export default NavigationTabs;
