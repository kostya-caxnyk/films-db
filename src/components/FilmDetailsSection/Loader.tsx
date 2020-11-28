import React from 'react';
import ContentLoader from 'react-content-loader';

const FilmSectionLoader = () => (
  <ContentLoader
    speed={2}
    width={1000}
    height={510}
    viewBox="0 0 1000 510"
    backgroundColor="#cfcfcf"
    foregroundColor="#908e8e">
    <rect x="0" y="30" rx="0" ry="0" width="300" height="450" />
    <rect x="325" y="72" rx="0" ry="0" width="630" height="27" />
    <rect x="325" y="117" rx="0" ry="0" width="600" height="17" />
    <circle cx="352" cy="201" r="27" />
    <rect x="384" y="180" rx="0" ry="0" width="72" height="15" />
    <rect x="384" y="203" rx="0" ry="0" width="73" height="13" />
    <rect x="324" y="253" rx="0" ry="0" width="550" height="24" />
    <rect x="329" y="297" rx="0" ry="0" width="123" height="28" />
    <rect x="325" y="338" rx="0" ry="0" width="700" height="115" />
  </ContentLoader>
);

export default FilmSectionLoader;
