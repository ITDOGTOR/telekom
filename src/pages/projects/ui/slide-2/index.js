import classNames from 'classnames/bind';
import PageName from 'shared/ui/page-name';
import TitleSection from 'shared/ui/title-section';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Slide2() {
  return (
    <section className={cx('slide2')}>
      <TitleSection>
        В рамках комплексного <br />
        подхода мы самостоятельно:
      </TitleSection>
      <PageName>Наши решения</PageName>

      <ul className={cx('slide2__list')}>
        <li className={cx('slide2__item')}>
          производим закупку качественного оборудования, оптимизированного <br /> производителем для наилучшего
          взаимодействия с нашим ПО;
        </li>
        <li className={cx('slide2__item')}>
          размещаем оборудование в соответствии с утвержденной городом <br /> адресной программой;
        </li>
        <li className={cx('slide2__item')}>
          согласовываем размещение на фасадах и подключаем <br /> оборудование к сетям;
        </li>
        <li className={cx('slide2__item')}>
          разворачиваем ПО распознавания и аналитики в защищенном <br /> контуре на стороне города;
        </li>
        <li className={cx('slide2__item')}>
          обслуживаем оборудование и обновляем ПО на протяжении <br /> всего периода эксплуатации системы.
        </li>
      </ul>
    </section>
  );
}
