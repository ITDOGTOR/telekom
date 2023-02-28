import classNames from 'classnames/bind';
import {NavLink} from 'react-router-dom';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function DescMenu() {
  return (
    <nav className={cx('descMenu')}>
      <ul className={cx('descMenu__list')}>
        <li className={cx('descMenu__item', 'descMenu__item--company')}>
          <NavLink className={cx('descMenu__link')} to="/company">
            О компании
          </NavLink>
        </li>
        <li className={cx('descMenu__item', 'descMenu__item--projects')}>
          <NavLink className={cx('descMenu__link')} to="/projects">
            Наши решения
          </NavLink>
        </li>
        <li className={cx('descMenu__item', 'descMenu__item--partners')}>
          <NavLink className={cx('descMenu__link')} to="/partners">
            Партнеры
          </NavLink>
        </li>
        <li className={cx('descMenu__item', 'descMenu__item--contacts')}>
          <NavLink className={cx('descMenu__link')} to="/contacts">
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
