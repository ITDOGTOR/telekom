import {useEffect, useState} from 'react';

import {Time, TIMES} from '../config/constants';

const {MORNING, AFTERNOON, EVENING} = Time;

const getDouble = (numbers) => (String(numbers).length === 1 ? `0${numbers}` : numbers);

export const useVideo = () => {
  const [sourceVideo, setSourceVideo] = useState(null);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const fullTime = Number(`${hours}${getDouble(minutes)}${getDouble(seconds)}`);

      const isMorning = fullTime >= MORNING.low && fullTime <= MORNING.high;
      const isAfternoon = fullTime >= AFTERNOON.low && fullTime <= AFTERNOON.high;
      const isEvening = fullTime >= EVENING.low && fullTime <= EVENING.high;

      if (isMorning) {
        setSourceVideo(TIMES.morning);
      } else if (isAfternoon) {
        setSourceVideo(TIMES.afternoon);
      } else if (isEvening) {
        setSourceVideo(TIMES.evening);
      } else {
        setSourceVideo(TIMES.night);
      }
    }, 1000);

    return () => {
      clearInterval(counterInterval);
    };
  }, []);

  return sourceVideo;
};
