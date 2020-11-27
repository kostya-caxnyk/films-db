import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import s from './FilmPageDeatils.module.scss';

import { IFilmData } from '../../interfaces';
import useFetch from '../../hooks/useFetch';
import FilmDetailsSection from '../../components/FilmDetailsSection/FilmDetailsSection';
import { ErrorMessage } from '../../components';

interface RouteParams {
  id: string;
}

const FilmDetailsPage: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const id = match.params.id;
  const apiUrl = `/${match.url.split('/')[1]}/${id}`;

  const [{ response, error }, doFetch] = useFetch<IFilmData>(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div className={s.page}>
      <div className={s.nav}>links</div>
      {error && <ErrorMessage error={error} />}
      {response && <FilmDetailsSection {...response} />}
    </div>
  );
};

export default FilmDetailsPage;
