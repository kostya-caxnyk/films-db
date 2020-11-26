import React from 'react';

import s from './FilmDetailsSection.module.scss';

import { IFilmData } from '../../interfaces';

const FilmDetailsSection: React.FC<IFilmData> = ({
  backdrop_path,
  genres,
  id,
  title,
  tagline,
  vote_average,
  runtime,
  status,
  revenue,
  release_date,
  poster_path,
  budget,
  original_language,
  overview,
}) => {
  return (
    <section className={s.mainInfo}>
      <div className="container">
        <img alt="" src={`https://image.tmdb.org/t/p/w500/${poster_path}` || ''} />
        <div className={s.content}>
          <h1 className={s.title}>
            {title}
            <span> (2020)</span>
          </h1>
          <div className={s.info}>
            {release_date} (CA) {genres.map((obj) => obj.name + ', ')} {runtime}
          </div>
          <div className={s.score}>{Math.round(vote_average * 10)}% User Score</div>
          <div className={s.description}>{tagline}</div>
          <div className={s.overview}>Overview</div>
          <p className={s.overviewText}>{overview}</p>
        </div>
      </div>
    </section>
  );
};

export default FilmDetailsSection;
