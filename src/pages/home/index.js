import AfternoonSrc from 'assets/videos/afternoon-fragment.mp4';
import EveningSrc from 'assets/videos/evening-fragment.mp4';
import MorningSrc from 'assets/videos/morning-fragment.mp4';
import NightSrc from 'assets/videos/night-fragment.mp4';
import classNames from 'classnames/bind';

import {useVideo} from './lib';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Home() {
  const sourceVideo = useVideo();

  return (
    <section className={cx('home')}>
      {MorningSrc.includes(sourceVideo) && (
        <video className={cx('home__videoFragment')} autoPlay loop muted>
          <source src={MorningSrc} type="video/mp4" />
        </video>
      )}

      {AfternoonSrc.includes(sourceVideo) && (
        <video className={cx('home__videoFragment')} autoPlay loop muted>
          <source src={AfternoonSrc} type="video/mp4" />
        </video>
      )}

      {EveningSrc.includes(sourceVideo) && (
        <video className={cx('home__videoFragment')} autoPlay loop muted>
          <source src={EveningSrc} type="video/mp4" />
        </video>
      )}

      {NightSrc.includes(sourceVideo) && (
        <video className={cx('home__videoFragment')} autoPlay loop muted>
          <source src={NightSrc} type="video/mp4" />
        </video>
      )}

      <div className={cx('home__title')}>
        <p className={cx('home__slogan')}>Умные решения для города</p>

        <p className={cx('home__description')}>
          Обеспечиваем поставку “под ключ” сервисов <br /> аналитики для умного и безопасного города.
        </p>
      </div>
    </section>
  );
}
