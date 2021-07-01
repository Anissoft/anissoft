import { useMounted } from '@anissoft/react-hooks';
import React from 'react';

export type ProgressiveImageProps = {
  images: string[];
  loadingMode?: 'simultaneously' | 'sequence';
  placeholder?: JSX.Element;
  sequenceTimeout?: number;
  onError?: (error: ErrorEvent) => void;
} & Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'placeholder' | 'onError'>

export function ProgressiveImage({
  images,
  placeholder,
  loadingMode = 'simultaneously',
  sequenceTimeout = 5000,
  onError,
  ...props
}: ProgressiveImageProps) {
  const { isMounted } = useMounted();
  const [currentSrc, setCurrentSrc] = React.useState(placeholder ? '' : images[0]);

  React.useEffect(() => {
    let isAborted = false;

    switch (loadingMode) {
      case 'sequence':
        images.reduce(async (acc, imageSrc, index) => {
          await acc;
          if (!isMounted() || isAborted) {
            return;
          }
          return Promise.race([
            new Promise((res) => {
              const image = new Image();
              image.addEventListener('load', () => {
                if (isMounted() && !isAborted && images.indexOf(currentSrc) < index) {
                  setCurrentSrc(imageSrc);
                }
                res();
              });
              image.addEventListener('error', (error) => {
                if (onError) {
                  onError(error)
                }
                res();
              });
              image.src = imageSrc;
            }),
            new Promise((res) => {
              setTimeout(res, sequenceTimeout)
            }),
          ]);
        }, Promise.resolve());
        break;
      case 'simultaneously':
      default:
        images.map(async (imageSrc, index) => {
          const image = new Image();
          image.addEventListener('load', () => {
            if (isMounted() && !isAborted && images.indexOf(currentSrc) < index) {
              setCurrentSrc(imageSrc);
            }
          });
          image.addEventListener('error', (error) => {
            if (onError) {
              onError(error)
            }
          });
          image.src = imageSrc;
        });
        break;
    }

    return () => {
      isAborted = true;
    }
  }, [...images, loadingMode]);

  return (!currentSrc && placeholder) ? placeholder : <img src={currentSrc} {...props} />
}