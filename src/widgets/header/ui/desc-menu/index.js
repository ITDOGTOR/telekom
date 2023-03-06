import classNames from 'classnames/bind';
import {Pages} from 'entities/page/model';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function DescMenu({setPage, pageNumber}) {
  const activeClass = (page) => (pageNumber === page ? 'descMenu__link--active' : '');

  return (
    <nav className={cx('descMenu')}>
      <ul className={cx('descMenu__list')}>
        <li className={cx('descMenu__item', 'descMenu__item--company')}>
          <a href onClick={() => setPage(Pages.COMPANY)} className={cx('descMenu__link', activeClass(Pages.COMPANY))}>
            О компании
          </a>
        </li>
        <li className={cx('descMenu__item', 'descMenu__item--projects')}>
          <a
            href
            onClick={() => setPage(Pages.PROJECTS_ONE)}
            className={cx('descMenu__link', activeClass(Pages.PROJECTS_ONE))}
          >
            Наши решения
          </a>
        </li>
        <li className={cx('descMenu__item', 'descMenu__item--partners')}>
          <a href onClick={() => setPage(Pages.PARTNERS)} className={cx('descMenu__link', activeClass(Pages.PARTNERS))}>
            Партнеры
          </a>
        </li>
        <li className={cx('descMenu__item', 'descMenu__item--contacts')}>
          <a href onClick={() => setPage(Pages.CONTACTS)} className={cx('descMenu__link', activeClass(Pages.CONTACTS))}>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}
