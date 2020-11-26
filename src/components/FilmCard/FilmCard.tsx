import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { format } from 'date-fns';

import s from './FilmCard.module.scss';

import { ICardData } from '../../interfaces';

const formatDate = (date: string): string => {
  if (date.split('-').length !== 3) {
    return '';
  }
  const [year, month, day] = date.split('-');
  return format(new Date(+year, +month - 1, +day), 'PP');
};

const findLinkToValue = (pathname: string, id: string | number): string => {
  const index = pathname.lastIndexOf('/');
  return pathname.slice(0, index + 1) + 'details/' + id;
};

const FilmCard: React.FC<ICardData> = ({
  poster_path,
  release_date,
  id,
  vote_average,
  title,
  first_air_date,
  name,
}) => {
  const history = useHistory();

  const rateNumber = Math.round(vote_average * 10);
  const rateBorderColor = rateNumber > 70 ? 'green' : rateNumber > 25 ? 'yellow' : 'red';
  const linkToValue = findLinkToValue(history.location.pathname, id);

  return (
    <div className={s.card}>
      <Link to={linkToValue} className={s.imgLink}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className={s.image} />
      </Link>
      <div className={s.info}>
        <Link to={linkToValue} className={s.title}>
          {title || name}
        </Link>
        <span className={s.date}>{formatDate(release_date || first_air_date)}</span>
        <span className={s.rate} style={{ borderColor: rateBorderColor }}>
          {rateNumber}%
        </span>
      </div>
    </div>
  );
};

export default FilmCard;
