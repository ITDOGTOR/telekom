import classNames from 'classnames/bind';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Loader() {
  return (
    <div className={cx('preloader')}>
      <div className={cx('preloader__wrapper')}>
        <div className={cx('preloader__body')}></div>
      </div>
    </div>
  );
}
