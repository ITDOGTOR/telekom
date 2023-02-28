import {useEffect, useState} from 'react';

export function useMediaQuery(query = '(max-width: 521px)') {
  const queries = Array.isArray(query) ? query : [query];

  const getQueries = () =>
    queries.map((query) => ({
      media: query,
      matches: typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
    }));

  const [value, setValue] = useState(() => getQueries());

  useEffect(() => {
    setValue(getQueries());

    const mql = queries.map((query) => window.matchMedia(query));

    const handler = (evt) => {
      setValue((prev) => {
        return prev.slice().map((item) => {
          if (item.media === evt.media)
            return {
              ...item,
              matches: evt.matches,
            };
          return item;
        });
      });
    };

    mql.forEach((mql) => {
      if (typeof mql.addListener === 'function') {
        mql.addListener(handler);
      } else {
        mql.addEventListener('change', handler);
      }
    });

    return () => {
      mql.forEach((mql) => {
        if (typeof mql.removeListener === 'function') {
          mql.removeListener(handler);
        } else {
          mql.removeEventListener('change', handler);
        }
      });
    };
  }, [window]);

  return value.map((item) => item.matches);
}
