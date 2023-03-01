import classNames from 'classnames/bind';
import {useState} from 'react';
import PageName from 'shared/ui/page-name';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function Slide1() {
  const [activeCard, setActiveCard] = useState(null);

  const onActiveCard = (numberCard) => () => setActiveCard(numberCard === activeCard ? false : numberCard);
  const getClassesActiveCard = (numberCard) => ['scene__card--active', `scene__card--active-${numberCard}`];

  return (
    <section className={cx('slide1')}>
      <PageName>Наши решения</PageName>

      <div className={cx('slide1__wrapper')}>
        <div className={cx('slide1__scene')}>
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

        <div className={cx('slide1__scene')}>
          <div
            className={cx('scene__card', activeCard === 2 && getClassesActiveCard(activeCard))}
            onClick={onActiveCard(2)}
          >
            <p className={cx('card__face', 'card__face--front')}>
              Быстрая <br /> интеграция
            </p>

            <p className={cx('card__face', 'card__face--back')}>
              Данный подход обеспечивает максимальный эффект от внедрения подобных технологий на улицах города, позволяя
              реализовать весь потенциал технологий распознавания для создания безопасной городской среды.
            </p>
          </div>
        </div>

        <div className={cx('slide1__scene')}>
          <div
            className={cx('scene__card', activeCard === 3 && getClassesActiveCard(activeCard))}
            onClick={onActiveCard(3)}
          >
            <p className={cx('card__face', 'card__face--front')}>
              Большая <br /> мощность
            </p>

            <p className={cx('card__face', 'card__face--back')}>
              Данный подход обеспечивает максимальный эффект от внедрения подобных технологий на улицах города, позволяя
              реализовать весь потенциал технологий распознавания для создания безопасной городской среды.
            </p>
          </div>
        </div>

        <div className={cx('slide1__scene')}>
          <div
            className={cx('scene__card', activeCard === 4 && getClassesActiveCard(activeCard))}
            onClick={onActiveCard(4)}
          >
            <p className={cx('card__face', 'card__face--front')}>
              Умная <br /> оптимизация
            </p>

            <p className={cx('card__face', 'card__face--back')}>
              Данный подход обеспечивает максимальный эффект от внедрения подобных технологий на улицах города, позволяя
              реализовать весь потенциал технологий распознавания для создания безопасной городской среды.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
