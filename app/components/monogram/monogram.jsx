import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="46.3"
      viewBox="0 0 48 46.3"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M41.4 0c-4.1.2-5.8 1.4-9.6 6.8A181.9 181.9 90 0 0 25 17.2a531.5 531.5 90 0 0-1 1.4l-1-1.5-2.1-3.2C14.2 3.5 11.9.9 8.9.6H3.4c-.7 0-1.2.6-1.6 1.5C1.2 3.4-.1 6.8 0 6.9l1.8-.4a20.5 20.5 90 0 1 3-.5c2.3-.5 5.6 2.2 8.7 7.2l3 4.7a47 47 0 0 1 5 8.6V40.9c-.5.4-7.7-1.8-9.5-2.8-.3-.2-.2-.2-.8.5a8 8 0 0 0-1.7 3.2c0 .3-.1.3.4.7 2.9 1.9 11.2 4 15 3.8a34.9 34.9 0 0 0 14.3-4.5 109.5 109.5 90 0 0-1.9-4.2s-.3 0-1.3.6a28.8 28.8 90 0 1-7.4 2.4l-1.3.4-.2-7.7c-.1-7.5-.1-6.9.3-8a98.4 98.4 90 0 1 5.8-9.8c4.3-7.1 6.9-9.8 9.4-9.8a24.7 24.7 90 0 1 5.4.8c0-.4-1.5-4.2-2-5.2C45.1.1 44.5 0 41.3 0" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
