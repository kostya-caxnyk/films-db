import React from 'react';

import s from './FilmsFeed.module.scss';

import { ICardData } from '../../interfaces';
import FilmCard from '../FilmCard/FilmCard';
import FilmCardLoader from '../FilmCard/FilmCardLoader';

interface FilmsFeedProps {
  items: ICardData[] | null;
}

const FilmsFeed: React.FC<FilmsFeedProps> = React.memo(({ items }) => {
  return (
    <div className={s.feed}>
      {items
        ? items.map((item) => {
            return <FilmCard {...item} key={item.id} />;
          })
        : new Array(20).fill(0).map((_, idx) => {
            return (
              <div className={s.card} key={idx}>
                <FilmCardLoader />
              </div>
            );
          })}
    </div>
  );
});

export default FilmsFeed;
