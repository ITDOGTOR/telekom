import classNames from 'classnames/bind';
import {useState} from 'react';
import PageName from 'shared/ui/page-name';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function ProjectsOne({isActive}) {
  const [activeCard, setActiveCard] = useState(null);

  const onActiveCard = (numberCard) => () => setActiveCard(numberCard === activeCard ? false : numberCard);
  const getClassesActiveCard = (numberCard) => ['scene__card--active', `scene__card--active-${numberCard}`];

  return (
    <section className={cx('projectsOne', isActive && 'projectsOne--active')}>
      <PageName>Наши решения</PageName>

      <div className={cx('projectsOne__bg')}></div>

      <div className={cx('projectsOne__wrapper')}>
        <div className={cx('projectsOne__scene')}>
          <div
            className={cx('scene__card', activeCard === 1 && getClassesActiveCard(activeCard))}
            onClick={onActiveCard(1)}
          >
            <p className={cx('card__face', 'card__face--front')}>
              Максимальный <br /> эффект
            </p>

            <p className={cx('card__face', 'card__face--back')}>
              Данный подход обеспечивает максимальный эффект от внедрения подобных технологий на улицах города, позволяя
              реализовать весь потенциал технологий распознавания для создания безопасной городской среды.
            </p>
          </div>
        </div>

        <div className={cx('projectsOne__scene')}>
          <div
            className={cx('scene__card', activeCard === 2 && getClassesActiveCard(activeCard))}
            onClick={onActiveCard(2)}
          >
            <p className={cx('card__face', 'card__face--front')}>
              Быстрая <br /> интеграция
            </p>

            <p className={cx('card__face', 'card__face--back')}>
              Сервисы поиска лиц и аналитики могут быть интегрированы в кратчайшие сроки с существующими решениями,
              которые уже используются городом и правоохранительными органами для работы по принципу “одного окна”.
            </p>
          </div>
        </div>

        <div className={cx('projectsOne__scene')}>
          <div
            className={cx('scene__card', activeCard === 3 && getClassesActiveCard(activeCard))}
            onClick={onActiveCard(3)}
          >
            <p className={cx('card__face', 'card__face--front')}>
              Большая <br /> мощность
            </p>

            <p className={cx('card__face', 'card__face--back')}>
              Особенностью всех решений на рынке в области видеоидентификации является большой объем вычислительных
              мощностей, необходимый для обработки видеопотока, “вырезания” лиц из кадра и их сравнения с другими лицами
              в базе.
            </p>
          </div>
        </div>

        <div className={cx('projectsOne__scene')}>
          <div
            className={cx('scene__card', activeCard === 4 && getClassesActiveCard(activeCard))}
            onClick={onActiveCard(4)}
          >
            <p className={cx('card__face', 'card__face--front')}>
              Умная <br /> оптимизация
            </p>

            <p className={cx('card__face', 'card__face--back')}>
              Мы реализовали технологию, которая позволяет обрабатывать видеопоток на процессоре внутри самой камеры,
              тем самым сокращая в 10 раз необходимые вычислительные мощности на стороне города.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
