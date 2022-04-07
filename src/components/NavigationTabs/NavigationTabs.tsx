import React from 'react';
import Link from 'next/link';
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

  return (
    <NavigationTabsWrapper $mobileMenuOpen={mobileMenuOpen}>
      {tabs?.map((step, index) => (
        <Link key={index} href={`/${step}`} passHref>
          <NavigationTab $isActive={router.asPath === `/${step}`} onClick={() => setMobileMenuOpen(false)}>
            {step === '' ? 'home' : step}
          </NavigationTab>
        </Link>
      ))}
    </NavigationTabsWrapper>
  );
};

export default NavigationTabs;
