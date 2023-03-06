import {ReactComponent as Mail} from 'assets/img/mail.svg';
import {ReactComponent as MapPin} from 'assets/img/map-pin.svg';
import {ReactComponent as Phone} from 'assets/img/phone.svg';
import classNames from 'classnames/bind';
import {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useMediaQuery} from 'shared/hooks/useMediaQuery';
import PageName from 'shared/ui/page-name';
import TitleSection from 'shared/ui/title-section';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Contacts({isActive}) {
  const [isActiveForm, setIsActiveForm] = useState(false);
  const {control, handleSubmit, reset} = useForm();
  const [isDesktop] = useMediaQuery('(min-width: 521px)');

  const onSubmit = (data) => {
    console.log(data);
  };

  const onReset = () => {
    setIsActiveForm(false);
    reset();
  };

  return (
    <section className={cx('contacts', isActive && 'contacts--active')}>
      <TitleSection blackLine>
        Свяжитесь <br /> с нами
      </TitleSection>

      <PageName className={cx('contacts__pageName')}>Контакты</PageName>

      <div className={cx('contacts__photo')}></div>
      <div className={cx('contacts__bg')}></div>

      <address className={cx('contacts__list')}>
        <div>
          <p className={cx('contacts__name')}>
            <Phone />
            <span>Телефон</span>
          </p>
          <a href="tel:+78124094344">+7 (812) 409-43-44</a>
        </div>

        <div>
          <p className={cx('contacts__name')}>
            <Mail />
            <span>Эл.адрес</span>
          </p>
          <a href="mailto:hello@telekomteam.ru">hello@telekomteam.ru</a>
        </div>

        <div className={cx('contacts__addressContainer')}>
          <p className={cx('contacts__name')}>
            <MapPin />
            <span>Адрес</span>
          </p>
          <div className={cx('contacts__address')}>
            <p>
              Москва, <br /> Пресненская наб., д. 8, стр 1, эт. 44
            </p>
            <p>
              Санкт-Петербург, <br /> Лодейнопольская ул., д. 5
            </p>
          </div>
        </div>

        <button className={cx('contacts__btn')} onClick={() => setIsActiveForm(true)} type="button">
          Написать нам
        </button>
      </address>

      <form
        style={{display: isActiveForm || isDesktop ? 'grid' : 'none'}}
        className={cx('contacts__form')}
        onSubmit={handleSubmit(onSubmit)}
      >
        <p>Оставьте заявку и мы свяжемся с вами</p>

        <Controller
          control={control}
          name="fio"
          render={({field, fieldState: {error}, formState}) => (
            <input
              {...field}
              {...formState}
              style={error ? {borderColor: 'crimson'} : {}}
              className={cx('form__fio')}
              type="text"
              name="fio"
              placeholder="*ваше имя"
            />
          )}
          rules={{required: 'Поле обязательно для заполнения'}}
        />

        <Controller
          control={control}
          name="email"
          render={({field, fieldState: {error}, formState}) => (
            <input
              {...field}
              {...formState}
              className={cx('form__email')}
              style={error ? {borderColor: 'crimson'} : {}}
              type="email"
              name="email"
              placeholder="*ваш электронный адрес"
            />
          )}
          rules={{required: 'Поле обязательно для заполнения'}}
        />

        <Controller
          control={control}
          name="phone"
          render={({field, formState}) => (
            <input
              {...field}
              {...formState}
              className={cx('form__phone')}
              type="tel"
              name="phone"
              placeholder="ваш номер телефона"
            />
          )}
        />

        <Controller
          control={control}
          name="message"
          render={({field, fieldState: {error}, formState}) => (
            <textarea
              {...field}
              {...formState}
              className={cx('form__message')}
              style={error ? {borderColor: 'crimson'} : {}}
              placeholder="Оставьте ваше сообщение"
            ></textarea>
          )}
          rules={{required: 'Поле обязательно для заполнения'}}
        />

        <div className={cx('form__controls')}>
          <button className={cx('contacts__btn')} type="reset" onClick={onReset}>
            Отменить
          </button>
          <button className={cx('contacts__btn')} type="submit">
            Отправить
          </button>
        </div>
      </form>
    </section>
  );
}
