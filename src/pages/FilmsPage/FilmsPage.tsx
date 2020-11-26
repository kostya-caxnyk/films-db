import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import s from './FilmsPage.module.scss';

import { ICardData } from '../../interfaces';
import useFetch from '../../hooks/useFetch';
import { FilmsFeed, ErrorMessage } from '../../components';

interface RouteParams {
  slug: string | undefined;
}

interface IResponse {
  results: ICardData[];
  total_pages: number;
}

interface IPageInfo {
  items: ICardData[] | null;
}

const FilmsPage: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  let apiUrl: string = match.url.replaceAll('-', '_');

  if (match.params.slug === undefined) {
    apiUrl += '/popular';
  }

  const [allPages, setAllPages] = useState<IPageInfo[]>([{ items: null }]);
  const [{ response, error }, doFetch] = useFetch<IResponse>(apiUrl, `&page=${allPages.length}`);

  useEffect(() => {
    doFetch();

    return () => setAllPages([{ items: null }]);
  }, [apiUrl, doFetch]);

  useEffect(() => {
    if (response) {
      setAllPages((allPages) => [
        ...allPages.slice(0, allPages.length - 1),
        { items: response.results },
      ]);
    }
  }, [response]);

  useEffect(() => {
    if (allPages.length > 1) {
      doFetch();
    }
  }, [allPages.length, doFetch]);

  const loadMoreFilms = (): void => {
    setAllPages((allPages) => [...allPages, { items: null }]);
  };

  return (
    <div className="container">
      <h1 className={s.title}>{changeUrlToTitle(apiUrl)}</h1>
      <div className={s.content}>
        <div className={s.sideBar}>side bar</div>
        <div className={s.pages}>
          {error && <ErrorMessage />}
          {allPages.map((page, idx) => (
            <FilmsFeed items={page.items} key={idx} />
          ))}
          {response && allPages.length < response.total_pages && (
            <button className={s.btnMore} onClick={loadMoreFilms}>
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

function changeUrlToTitle(url: string): string {
  //we getting url like '/movie/popular'
  let arr = url.split('/');
  //here we need to delete first array element which is ''
  arr.shift();
  arr = arr.map((word) =>
    word
      .split('_')
      .map((e) => e[0].toUpperCase() + e.slice(1))
      .join(' '),
  );

  if (arr[0] === 'Movie') {
    return arr.reverse().join(' ') + 's';
  }

  if (arr[0] === 'Tv') {
    arr.shift();
    return arr.join(' ') + ' TV Shows';
  }

  return 'Films Page';
}

export default FilmsPage;
