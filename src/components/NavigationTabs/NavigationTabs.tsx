import React from 'react';

import { Tabs } from '../Navigation/Navigation';
import { NavigationTabsWrapper, NavigationTab } from './NavigationTabs.styles';

interface NavigationTabsProps {
  currentTab?: Tabs;
  tabs?: Tabs[];
  onPress: (step: Tabs) => void;
  mobileMenuOpen?: boolean;
}

const NavigationTabs = (props: NavigationTabsProps) => {
  const { currentTab, tabs, onPress } = props;

  return (
    <NavigationTabsWrapper>
      {tabs?.map((step, index) => {
        const isActive = currentTab === step;
        return (
          <NavigationTab key={index} onClick={() => onPress(step)}>
            {step}
          </NavigationTab>
        );
      })}
    </NavigationTabsWrapper>
  );
};

export default NavigationTabs;
