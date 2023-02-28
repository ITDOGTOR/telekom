import classNames from 'classnames/bind';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Layout({children}) {
  return <main className={cx('layout')}>{children}</main>;
}
