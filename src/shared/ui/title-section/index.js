import {ReactComponent as VectorTitleDSrc} from 'assets/img/vector-title-d.svg';
import {ReactComponent as VectorTitleMSrc} from 'assets/img/vector-title-m.svg';
import {ReactComponent as VectorTitleTSrc} from 'assets/img/vector-title-t.svg';
import classNames from 'classnames/bind';

import {useMediaQuery} from '../../hooks/useMediaQuery';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function TitleSection({className = '', color = '#ffffff', children}) {
  const [mobL, table] = useMediaQuery(['(min-width: 521px)', '(min-width: 961px)']);

  return (
    <div className={cx('titleSection', className)}>
      <p>{children}</p>

      {!mobL && !table && <VectorTitleMSrc style={{color}} className={cx('titleSection__svg')} />}
      {mobL && !table && <VectorTitleTSrc style={{color}} className={cx('titleSection__svg')} />}
      {mobL && table && <VectorTitleDSrc style={{color}} className={cx('titleSection__svg')} />}
    </div>
  );
}
