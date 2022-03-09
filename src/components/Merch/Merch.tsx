import React from 'react';
import Image from 'next/image';

import { openInTab } from '../../utils/helpers';
// import useStyles from './Merch.styles';

enum MerchStatus {
  InStock = 'In Stock',
  OutOfStock = 'Sold Out',
}

const Merch = ({ merch }) => {
  const classes = {};

  return (
    <div className={classes.merch}>
      {merch.map((item, index) => {
        const { title, price, status, image, link } = item?.fields;

        const imageSource = image?.fields?.file?.url;
        const isInStock = status === MerchStatus.InStock;

        return (
          <div key={index} className={classes.merchWrapper}>
            <Image
              className={classes.merchImage}
              src={'https:' + imageSource}
              width={368}
              height={276}
              alt={title}
              onClick={() => openInTab(link)}
            />
            <div className={classes.merchInfo}>
              <div className={classes.merchLink} onClick={() => openInTab(link)}>
                {title}
              </div>
              {!isInStock ? (
                <div className={classes.merchOutOfStock}>{status}</div>
              ) : (
                <div className={classes.merchPrice}>{price}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Merch;
