import classNames from 'classnames/bind';
import {useState} from 'react';

import {City} from './config/constants';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function MapOffices() {
  const [activeCity, setActiveCity] = useState('moscow');

  return (
    <section className={cx('mapOffices')}>
      <div className={cx('mapOffices__btns')}>
        <button
          className={cx('mapOffices__btn', activeCity === 'moscow' && 'mapOffices__btn--active')}
          type="button"
          onClick={() => setActiveCity('moscow')}
        >
          Москва
        </button>
        <button
          className={cx('mapOffices__btn', activeCity === 'piter' && 'mapOffices__btn--active')}
          type="button"
          onClick={() => setActiveCity('piter')}
        >
          Санкт-Петербург
        </button>
      </div>

      <div style={{position: 'relative', overflow: 'hidden'}}>
        <iframe
          className={cx('mapOffices__map')}
          src={`https://yandex.ru/map-widget/v1/${City[activeCity.toUpperCase()]}`}
          allowFullScreen
        />
      </div>
    </section>
  );
}
