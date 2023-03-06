import {ReactComponent as Point} from 'assets/img/point.svg';
import {ReactComponent as VectorPointsBottom} from 'assets/img/vector-points-bottom.svg';
import {ReactComponent as VectorPointsTop} from 'assets/img/vector-points-top.svg';
import classNames from 'classnames/bind';
import {PAGES_COUNT} from 'entities/page/model';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Points({pageNumber, setPage}) {
  const onSetPage = (evt, page) => {
    evt.preventDefault();
    setPage(page);
  };

  return (
    <div className={cx('points')}>
      <VectorPointsTop className={cx('points__vector', 'points__vector--top')} />

      <ul className={cx('points__list')}>
        {[...Array(PAGES_COUNT).keys()].map((it) => (
          <li key={it}>
            <a
              onClick={(evt) => onSetPage(evt, it)}
              className={cx('points__item', pageNumber === it && 'points__item--active')}
              href=""
            >
              <Point className={cx('points__pointSvg')} />
            </a>
          </li>
        ))}
      </ul>

      <VectorPointsBottom className={cx('points__vector', 'points__vector--bottom')} />
    </div>
  );
}
