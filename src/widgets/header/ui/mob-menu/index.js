import classNames from 'classnames/bind';
import {NavLink} from 'react-router-dom';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function MobMenu(props) {
  const getClasses = ({isActive}) => cx('mobMenu__link', isActive && 'mobMenu__link--active');

  return (
    <div className={cx('mobMenu')} {...props}>
      <div className={cx('mobMenu__container')}>
        <NavLink className={getClasses} to="/company">
          О компании
        </NavLink>
        <NavLink className={getClasses} to="/projects">
          Наши решения
        </NavLink>
        <NavLink className={getClasses} to="/partners">
          Партнёры
        </NavLink>
        <NavLink className={getClasses} to="/contacts">
          Контакты
        </NavLink>
      </div>
    </div>
  );
}
