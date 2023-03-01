import classNames from 'classnames/bind';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function TitleSection({children}) {
  return <p className={cx('titleSection')}>{children}</p>;
}
