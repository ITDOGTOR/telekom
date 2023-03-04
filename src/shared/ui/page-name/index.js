import classNames from 'classnames/bind';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function PageName({className, children}) {
  return <h2 className={cx('pageName', className)}>{children}</h2>;
}
