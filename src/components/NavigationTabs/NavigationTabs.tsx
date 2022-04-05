import React from 'react';
import { useRouter } from 'next/router';

import { Tabs } from '../Navigation/Navigation';
import { NavigationTabsWrapper, NavigationTab } from './NavigationTabs.styles';

interface NavigationTabsProps {
  tabs?: Tabs[];
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
}

const NavigationTabs = (props: NavigationTabsProps) => {
  const { tabs, mobileMenuOpen, setMobileMenuOpen } = props;

  const router = useRouter();

  const tabSelect = (step: Tabs) => {
    router.push(`/${step}`);
    setMobileMenuOpen(false);
  };

  return (
    <NavigationTabsWrapper $mobileMenuOpen={mobileMenuOpen}>
      {tabs?.map((step, index) => (
        <NavigationTab $isActive={router.asPath === `/${step}`} key={index} onClick={() => tabSelect(step)}>
          {step === '' ? 'home' : step}
        </NavigationTab>
      ))}
    </NavigationTabsWrapper>
  );
};

export default NavigationTabs;
