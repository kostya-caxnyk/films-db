import React from 'react';

import s from './FilmDetailsSection.module.scss';

import { IFilmData } from '../../interfaces';
import { RateCircle } from '../../components';

const formatTime = (minutes: number | null): string => {
  if (!minutes) {
    return '0m';
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (!hours) {
    return `${mins}m`;
  }

  return `${hours}h ${mins}m`;
};

const FilmDetailsSection: React.FC<IFilmData> = React.memo(
  ({
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
    name,
    first_air_date,
    episode_run_time,
  }) => {
    const realiseYear = release_date ? release_date.split('-')[0] : first_air_date.split('-')[0];
    const runtimeString = episode_run_time ? formatTime(episode_run_time[0]) : formatTime(runtime);
    const genresString = genres.map(({ name }, idx) =>
      idx === genres.length - 1 ? name : name + ', ',
    );

    return (
      <section
        style={{
          backgroundImage: ` url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path})`,
        }}
        className={s.section}>
        <div className={s.gradient}>
          <div className="container">
            <div className={s.inner}>
              <img
                alt=""
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                className={s.poster}
              />
              <div className={s.content}>
                <h1 className={s.title}>
                  {title || name}
                  <span className={s.year}> ({realiseYear})</span>
                </h1>

                <div className={s.info}>
                  {release_date || first_air_date}{' '}
                  {!!genres.length && <span className={s.dot}>{genresString}</span>}
                  <span className={s.dot}>{runtimeString}</span>
                </div>

                <div className={s.score}>
                  <RateCircle score={vote_average} size="big" />
                  User Score
                </div>

                <div className={s.description}>{tagline}</div>

                {overview && (
                  <>
                    <div className={s.overview}>Overview</div>
                    <p className={s.overviewText}>{overview}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

export default FilmDetailsSection;
