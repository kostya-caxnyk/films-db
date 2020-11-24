import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

interface RouteParams {
  slug: string;
}

const FilmsPage: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const slug = match.params.slug.split('-').join('_');
  const apiUrl: string = `/movie/${slug}`;

  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    //doFetch();
  }, [apiUrl, doFetch]);
  console.log(response);
  return <div>films page</div>;
};

export default FilmsPage;
