import React from 'react';

import { ProgressiveImage } from '../../../components/ProgressiveImage';

// @ts-expect-error
import photo_1100 from 'url:./../../../../public/assets/images/photo_1100.webp';
// @ts-expect-error
// import photo_800 from 'url:./../../../../public/assets/images/photo_800.webp';
// @ts-expect-error
import photo_400 from 'url:./../../../../public/assets/images/photo_400.webp';
// @ts-expect-error
// import photo_200 from 'url:./../../../../public/assets/images/photo_200.webp';
// @ts-expect-error
import photo_100 from 'url:./../../../../public/assets/images/photo_100.webp';

import { useStyles } from './styles';

export function Avatar() {
  const classes = useStyles();

  return (
    <ProgressiveImage
      images={[photo_100, photo_400, photo_1100]}
      loadingMode="sequence"
      onError={console.error}
      className={classes.image}
      alt="Avatar"
    />
  );
}
