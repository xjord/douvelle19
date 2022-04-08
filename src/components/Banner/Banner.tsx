import React from 'react';
import Image from 'next/image';

import { openInTab } from '../../utils/helpers';
import Button from '../Button';
import {
  BannerWrapper,
  Banner,
  BannerImageWrapper,
  BannerImage,
  BannerText,
  BannerInfo,
  BannerTitle,
  BannerOutNow,
  BannerButtonWrapper,
} from './Banner.styles';

const Home = ({ banner }) => {
  const releaseTitle = banner?.releaseTitle;
  const releaseLink = banner?.link?.content[0]?.content[0]?.value;
  const releaseImage = banner?.bannerImage?.fields?.file?.url;

  return (
    <BannerWrapper>
      <Banner>
        <BannerImageWrapper>
          <BannerImage>
            <Image
              height={500}
              width={500}
              src={'https:' + releaseImage}
              alt={releaseTitle}
              onClick={() => openInTab(releaseLink)}
            />
          </BannerImage>
        </BannerImageWrapper>
        <BannerText>
          <BannerInfo>
            <BannerTitle>{releaseTitle}</BannerTitle>
            <BannerOutNow>OUT NOW</BannerOutNow>
          </BannerInfo>
          <BannerButtonWrapper>
            <Button onClick={() => openInTab(releaseLink)}>Stream/Purchase</Button>
          </BannerButtonWrapper>
        </BannerText>
      </Banner>
    </BannerWrapper>
  );
};

export default Home;
