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
  const { currentTab, tabs, onPress, mobileMenuOpen } = props;

  return (
    <NavigationTabsWrapper $mobileMenuOpen={mobileMenuOpen}>
      {tabs?.map((step, index) => (
        <NavigationTab $isActive={currentTab === step} key={index} onClick={() => onPress(step)}>
          {step}
        </NavigationTab>
      ))}
    </NavigationTabsWrapper>
  );
};

export default NavigationTabs;
