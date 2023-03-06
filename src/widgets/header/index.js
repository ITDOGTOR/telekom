import {ReactComponent as Logo} from 'assets/img/logo.svg';
import classNames from 'classnames/bind';
import {Pages, PAGES_COUNT} from 'entities/page/model';
import {useState} from 'react';
import {useMediaQuery} from 'shared/hooks/useMediaQuery';

import styles from './styles.module.css';
import DescMenu from './ui/desc-menu';
import MobMenu from './ui/mob-menu';

const cx = classNames.bind(styles);

export default function Header({setPage, pageNumber}) {
  const [isVisibleMobMenu, setIsVisibleMobMenu] = useState(false);

  const [isMobile] = useMediaQuery();

  const toggleMobMenu = () => setIsVisibleMobMenu(!isVisibleMobMenu);

  const onClickLogo = () => {
    setPage(Pages.HOME);
  };

  const setPageNumber = (number) => {
    toggleMobMenu();
    setPage(number);
  };

  const isBlackLogo = pageNumber === Pages.CONTACTS || pageNumber === Pages.MAP_OFFICES || pageNumber === PAGES_COUNT;

  return (
    <header className={cx('header')}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={cx('header__logo', isBlackLogo && 'header__logo--black')} onClick={onClickLogo}>
        <Logo />
      </a>

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

          <MobMenu pageNumber={pageNumber} setPage={setPageNumber} style={isVisibleMobMenu ? {top: '0'} : {}} />
        </>
      ) : (
        <DescMenu pageNumber={pageNumber} setPage={setPage} />
      )}
    </header>
  );
}
