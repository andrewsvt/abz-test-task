import React from 'react';
import { Button } from '../Button/Button';

import styles from './Banner.module.scss';

interface IBannerProps {
  scrollToForm: () => any;
}

const Banner: React.FC<IBannerProps> = ({ scrollToForm }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__content}>
        <div className={styles.banner__textblock}>
          <h1>Test assignment for front-end developer</h1>
          <p>
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS,
            JS with a vast understanding of User design thinking as they'll be building web
            interfaces with accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </p>
        </div>
        <Button onClick={scrollToForm} text={'Sign up'} isDisabled={false} />
      </div>
    </div>
  );
};

export default Banner;
