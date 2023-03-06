import classNames from 'classnames/bind';
import PageName from 'shared/ui/page-name';
import TitleSection from 'shared/ui/title-section';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Company({isActive}) {
  return (
    <section className={cx('company', isActive && 'company--active')}>
      <TitleSection>Телеком Тим</TitleSection>
      <PageName>О компании</PageName>

      <div className={cx('company__bg')}></div>
      <div className={cx('company__figure')}></div>

      <ul className={cx('company__list')}>
        <li className={cx('company__item')}>
          Новый оператор связи, созданный специально для реализации сложных комплексных городских проектов.
        </li>
        <li className={cx('company__item')}>
          Обеспечивает поставку <span>“под ключ”</span> сервисов аналитики для умного и безопасного города.
        </li>
        <li className={cx('company__item')}>
          Закрывает весь спектр вопросов, от поставки и монтажа оборудования, до разработки аналитических инструментов и
          интеграции их с текущими продуктами на стороне заказчика.
        </li>
      </ul>
    </section>
  );
}
