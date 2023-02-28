import {ReactComponent as Logo} from 'assets/img/logo.svg';
import classNames from 'classnames/bind';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useMediaQuery} from 'shared/hooks/useMediaQuery';

import styles from './styles.module.css';
import DescMenu from './ui/desc-menu';
import MobMenu from './ui/mob-menu';

const cx = classNames.bind(styles);

export default function Header() {
  const [isVisibleMobMenu, setIsVisibleMobMenu] = useState(false);

  const [isMobile] = useMediaQuery();

  const toggleMobMenu = () => setIsVisibleMobMenu(!isVisibleMobMenu);

  return (
    <header className={cx('header')}>
      <NavLink className={cx('header__logo')} to="/">
        <Logo />
      </NavLink>

      {isMobile ? (
        <>
          <button
            className={cx('header__menuBtn', isVisibleMobMenu && 'header__menuBtn--active')}
            type="button"
            onClick={toggleMobMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <MobMenu style={isVisibleMobMenu ? {top: '0'} : {}} />
        </>
      ) : (
        <DescMenu />
      )}
    </header>
  );
}
