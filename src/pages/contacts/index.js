import classNames from 'classnames/bind';
import PageName from 'shared/ui/page-name';
import TitleSection from 'shared/ui/title-section';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Contacts() {
  return (
    <section className={cx('contacts')}>
      <TitleSection color="#000000">
        Свяжитесь <br /> с нами
      </TitleSection>

      <PageName className={cx('contacts__pageName')}>Контакты</PageName>
    </section>
  );
}
