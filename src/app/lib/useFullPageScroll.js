import {PAGES_COUNT} from 'entities/page/model';
import {useState} from 'react';

export const useFullPageScroll = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const [wheelDelayTimerId, setWheelDelayTimerId] = useState(-1);

  const wheel = (event) => {
    if (wheelDelayTimerId !== -1) {
      return;
    }

    setWheelDelayTimerId(setTimeout(() => setWheelDelayTimerId(-1), 500));

    if (event.deltaY > 0 && pageNumber < PAGES_COUNT) {
      setPageNumber(pageNumber + 1);
    }

    if (event.deltaY < 0 && pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  const touchStart = (event) => {
    setMoveY(event.changedTouches[0].clientY);
    setMoveX(event.changedTouches[0].clientX);
  };

  const touchEnd = (event) => {
    let mvY = moveY - event.changedTouches[0].clientY;
    let mvX = moveX - event.changedTouches[0].clientX;

    if (Math.abs(mvX) > Math.abs(mvY)) {
      return;
    }

    if (mvY > 0 && pageNumber < PAGES_COUNT) {
      setPageNumber(pageNumber + 1);
    }

    if (mvY < 0 && pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  return {wheel, touchStart, touchEnd, pageNumber, setPageNumber};
};
