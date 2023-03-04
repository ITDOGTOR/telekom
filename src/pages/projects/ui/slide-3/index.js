import {ReactComponent as Trafic} from 'assets/img/trafic.svg';
import classNames from 'classnames/bind';
import {useState} from 'react';
import Tilt from 'react-parallax-tilt';
import PageName from 'shared/ui/page-name';
import TitleSection from 'shared/ui/title-section';
import {CountUp} from 'use-count-up';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Slide3() {
  const [isCounting, setIsCounting] = useState(true);

  const countUpSharedProps = {
    isCounting,
    onComplete: () => setIsCounting(false),
  };

  return (
    <section className={cx('slide3')}>
      <TitleSection>
        Поставка решений для <br />
        транспортной безопасности
      </TitleSection>
      <PageName>Наши решения</PageName>

      <Tilt>
        <Trafic className={cx('slide3__traffic')} />
      </Tilt>

      <div className={cx('slide3__report')}>
        <p className={cx('report__text')}>
          Мы создали программно-аппаратный комплекс, который одновременно считает число людей на пешеходных переходах
          для управления фазами светофора и «вырезает» лица из потока, передавая их далее в наш сервис распознавания.
        </p>

        <div className={cx('report__day')}>
          <p className={cx('report__name')}>В сутки</p>
          <p className={cx('report__dayScore')}>
            <span className={cx('report__score')}>
              <CountUp {...countUpSharedProps} end={23000000} duration={3} thousandsSeparator="," />
            </span>{' '}
            <span className={cx('report__suffix')}>MB</span>
          </p>
        </div>

        <div className={cx('report__month')}>
          <p className={cx('report__name')}>В месяц</p>
          <p className={cx(cx('report__monthScore'))}>
            <span className={cx('report__score')}>
              <CountUp {...countUpSharedProps} end={694000000} duration={3} thousandsSeparator="," />
            </span>{' '}
            <span className={cx('report__suffix')}>MB</span>
          </p>
        </div>
      </div>
    </section>
  );
}
