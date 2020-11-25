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
  console.log('rerendeer');
  let apiUrl: string = match.url.replaceAll('-', '_');

  if (match.params.slug === undefined) {
    apiUrl += '/popular';
  }

  const [pageNumber, setPageNumber] = useState(1);
  const [allPages, setAllPages] = useState<IPageInfo[]>([]);
  const [{ response, error }, doFetch] = useFetch<IResponse>(apiUrl, `&page=${pageNumber}`);

  useEffect(() => {
    setPageNumber(1);
    setAllPages([{ items: null }]);
    doFetch();
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
    if (pageNumber > 1) {
      doFetch();
      setAllPages((allPages) => [...allPages, { items: null }]);
    }
  }, [pageNumber, doFetch]);

  return (
    <div className="container">
      <h1 className={s.title}>films</h1>
      <div className={s.content}>
        <div className={s.sideBar}>side bar</div>
        <div className={s.pages}>
          {error && <ErrorMessage />}

          {allPages.length &&
            allPages.map((page, idx) => <FilmsFeed items={page.items} key={idx} />)}
          {response && pageNumber < response.total_pages && (
            <button className={s.btnMore} onClick={() => setPageNumber((n) => n + 1)}>
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilmsPage;
