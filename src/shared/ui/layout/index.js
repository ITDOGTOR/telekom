import classNames from 'classnames/bind';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Layout({children, style, footer}) {
  return (
    <div style={style} className={cx('page__container')}>
      <main className={cx('layout')}>{children}</main>
      {footer}
    </div>
  );
}
