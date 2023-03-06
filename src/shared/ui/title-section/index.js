import {ReactComponent as VectorTitleDSrc} from 'assets/img/vector-title-d.svg';
import {ReactComponent as VectorTitleDSrcB} from 'assets/img/vector-title-d-black.svg';
import {ReactComponent as VectorTitleMSrc} from 'assets/img/vector-title-m.svg';
import {ReactComponent as VectorTitleMSrcB} from 'assets/img/vector-title-m-black.svg';
import {ReactComponent as VectorTitleTSrc} from 'assets/img/vector-title-t.svg';
import {ReactComponent as VectorTitleTSrcB} from 'assets/img/vector-title-t-black.svg';
import classNames from 'classnames/bind';

import {useMediaQuery} from '../../hooks/useMediaQuery';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function TitleSection({blackLine = false, children}) {
  const [mobL, table] = useMediaQuery(['(min-width: 521px)', '(min-width: 961px)']);

  return (
    <div className={cx('titleSection')}>
      <p>{children}</p>

      {blackLine && !mobL && !table && <VectorTitleMSrcB className={cx('titleSection__svg')} />}
      {blackLine && mobL && !table && <VectorTitleTSrcB className={cx('titleSection__svg')} />}
      {blackLine && mobL && table && <VectorTitleDSrcB className={cx('titleSection__svg')} />}

      {!blackLine && !mobL && !table && <VectorTitleMSrc className={cx('titleSection__svg')} />}
      {!blackLine && mobL && !table && <VectorTitleTSrc className={cx('titleSection__svg')} />}
      {!blackLine && mobL && table && <VectorTitleDSrc className={cx('titleSection__svg')} />}
    </div>
  );
}
