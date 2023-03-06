import classNames from 'classnames/bind';
import {Pages} from 'entities/page/model';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function MobMenu({setPage, pageNumber, style}) {
  const activeClass = (page) => (pageNumber === page ? 'mobMenu__link--active' : '');

  return (
    <div className={cx('mobMenu')} style={style}>
      <div className={cx('mobMenu__container')}>
        <div className={cx('mobMenu__wrapper')}>
          <a href onClick={() => setPage(Pages.COMPANY)} className={cx('mobMenu__link', activeClass(Pages.COMPANY))}>
            О компании
          </a>
          <a
            href
            onClick={() => setPage(Pages.PROJECTS_ONE)}
            className={cx(
              'mobMenu__link',
              pageNumber >= Pages.PROJECTS_ONE && pageNumber <= Pages.PROJECTS_FOUR && 'mobMenu__link--active',
            )}
          >
            Наши решения
          </a>
          <a href onClick={() => setPage(Pages.PARTNERS)} className={cx('mobMenu__link', activeClass(Pages.PARTNERS))}>
            Партнёры
          </a>
          <a href onClick={() => setPage(Pages.CONTACTS)} className={cx('mobMenu__link', activeClass(Pages.CONTACTS))}>
            Контакты
          </a>
        </div>
      </div>
    </div>
  );
}
