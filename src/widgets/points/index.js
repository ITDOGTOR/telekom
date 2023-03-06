import {ReactComponent as Point} from 'assets/img/point.svg';
import classNames from 'classnames/bind';
import {PAGES_COUNT} from 'entities/page/model';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Points({pageNumber, setPage}) {
  return (
    <div className={cx('points')}>
      <ul className={cx('points__list')}>
        {[...Array(PAGES_COUNT).keys()].map((it) => (
          <li key={it}>
            <a
              onClick={() => setPage(it)}
              className={cx('points__item', pageNumber === it && 'points__item--active')}
              href
            >
              <Point />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
