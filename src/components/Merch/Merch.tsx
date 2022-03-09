import React from 'react';
import Image from 'next/image';

import { openInTab } from '../../utils/helpers';
import { MerchWrapper, MerchItem, MerchImage, MerchInfo, MerchLink, MerchOutOfStock, MerchPrice } from './Merch.styles';

enum MerchStatus {
  InStock = 'In Stock',
  OutOfStock = 'Sold Out',
}

const Merch = ({ merch }) => {
  return (
    <MerchWrapper>
      {merch.map((item, index) => {
        const { title, price, status, image, link } = item?.fields;

        const imageSource = image?.fields?.file?.url;
        const isInStock = status === MerchStatus.InStock;

        return (
          <MerchItem key={index}>
            <MerchImage>
              <Image
                src={'https:' + imageSource}
                width={368}
                height={276}
                alt={title}
                onClick={() => openInTab(link)}
              />
            </MerchImage>
            <MerchInfo>
              <MerchLink onClick={() => openInTab(link)}>{title}</MerchLink>
              {!isInStock ? <MerchOutOfStock>{status}</MerchOutOfStock> : <MerchPrice>{price}</MerchPrice>}
            </MerchInfo>
          </MerchItem>
        );
      })}
    </MerchWrapper>
  );
};

export default Merch;
