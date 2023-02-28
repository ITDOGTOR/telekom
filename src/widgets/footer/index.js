import {ReactComponent as Logo} from 'assets/img/logo.svg';
import {ReactComponent as Mail} from 'assets/img/mail.svg';
import {ReactComponent as MapPin} from 'assets/img/map-pin.svg';
import {ReactComponent as Phone} from 'assets/img/phone.svg';
import classNames from 'classnames/bind';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer__wrapper')}>
        <div className={cx('footer__company')}>
          <p className={cx('footer__title')}>О компании</p>

          <p className={cx('company__text')}>
            Новый оператор связи, созданный
            <br />
            специально для реализации сложных
            <br />
            комплексных городских проектов.
          </p>

          <address className={cx('company__address')}>
            <p>
              <MapPin className={cx('company__map-pin')} />
              <span>
                Москва,
                <br />
                Пресненская наб., д. 8, стр 1, эт. 44
              </span>
            </p>

            <p>
              <MapPin className={cx('company__map-pin')} />
              <span>
                Санкт-Петербург,
                <br />
                Лодейнопольская ул., д. 5
              </span>
            </p>
          </address>
        </div>
        <div>
          <p className={cx('footer__title')}>Контакты</p>

          <div className={cx('contacts__list')}>
            <a href="tel:+78124094344">
              <Phone className={cx('contact__svg')} />
              +7 (812) 409-43-44
            </a>
            <a href="mailto:hello@telekomteam.ru">
              <Mail className={cx('contact__svg')} />
              hello@telekomteam.ru
            </a>
          </div>
        </div>
        <div>
          <p className={cx('footer__title')}>Лицензии</p>

          <div className={cx('license__list')}>
            <p>
              <span>186 448</span> <br />
              Услуги связи по передаче данных, за
              <br />
              исключением услуг связи по передаче
              <br />
              данных для целей передачи голосовой
              <br />
              информации.
            </p>

            <p>
              <span>183 887</span> <br />
              Телематические услуги связи.
            </p>
          </div>
        </div>

        <Logo className={cx('footer__logo')} />
      </div>

      <p className={cx('footer__copyright')}>© 2023 ООО "Телеком Тим"</p>
    </footer>
  );
}
