import IntroSrc from 'assets/videos/intro.mp4';
import classNames from 'classnames/bind';
import PageName from 'shared/ui/page-name';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function ProjectsFour() {
  return (
    <section className={cx('projectsFour')}>
      <PageName>Наши решения</PageName>

      <div className={cx('projectsFour__wrapper')}>
        <p>
          Пешеходные переходы — идеальные места для <br /> размещения камер в целях распознавания лиц.
        </p>
        <p>
          Переходы хорошо освещены, здесь <br /> сконцентрированы потоки людей и люди поднимают <br /> голову вверх,
          смотря на таймер обратного отсчета <br /> до зеленого сигнала светофора.
        </p>
      </div>

      <video className={cx('projectsFour__videoFragment')} controls>
        <source src={IntroSrc} type="video/mp4" />
      </video>
    </section>
  );
}
