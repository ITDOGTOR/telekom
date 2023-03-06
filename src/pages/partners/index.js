import BankLogoSrc from 'assets/img/bank-logo.png';
import DahuaLogoSrc from 'assets/img/dahua-logo.png';
import ORBLLogoSrc from 'assets/img/orbl-logo.png';
import PSKLogoSrc from 'assets/img/psk-logo.png';
import classNames from 'classnames/bind';
import PageName from 'shared/ui/page-name';
import TitleSection from 'shared/ui/title-section';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Partners({isActive}) {
  return (
    <section className={cx('partners', isActive && 'partners--active')}>
      <div className={cx('partners__bgFigure')} />

      <TitleSection>
        Наши ключевые <br /> партнеры
      </TitleSection>

      <PageName>Наши партнеры</PageName>

      <div className={cx('partners__list')}>
        <div>
          <img src={BankLogoSrc} alt="" />
          <p>
            АО “Акционерный Банк “Россия” - финансовый партнер, обеспечивающий ликвидность для капитальных вложений в
            инфраструктуру для реализации гибких моделей взаимодействия с заказчиками.
          </p>
        </div>

        <div>
          <img src={PSKLogoSrc} alt="" />
          <p>
            АО “Петербургская Сбытовая Компания” - инфраструктурный партнер, закрывающий контур согласования и
            подключения оборудования к сетям.
          </p>
        </div>

        <div>
          <img src={ORBLLogoSrc} alt="" />
          <p>
            ООО “ОРБЛ Рус” - петербургский разработчик систем распознавания лиц, включенный в реестр российского
            программного обеспечения (запись в реестре №12036 от 18.11.2021) и выступающий поставщиком ядра
            распознавания лиц.
          </p>
        </div>

        <div>
          <img src={DahuaLogoSrc} alt="" />
          <p>
            Dahua Technology - китайский производитель видео-камер, совместно с которым была реализована прошивка,
            позволяющая производить обработку видеопотока внутри самой камеры.
          </p>
        </div>
      </div>
    </section>
  );
}
