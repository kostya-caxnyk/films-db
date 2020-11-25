import React from 'react';
import ContentLoader from 'react-content-loader';

const FilmCardLoader = () => (
  <ContentLoader
    speed={2}
    width={206}
    height={390}
    viewBox="0 0 206 390"
    backgroundColor="#cfcfcf"
    foregroundColor="#908e8e">
    <rect x="-17" y="191" rx="0" ry="0" width="280" height="20" />
    <rect x="0" y="0" rx="10" ry="10" width="206" height="306" />
    <rect x="2" y="413" rx="0" ry="0" width="100" height="28" />
    <rect x="122" y="403" rx="26" ry="26" width="148" height="51" />
    <rect x="0" y="332" rx="0" ry="0" width="206" height="20" />
    <rect x="89" y="371" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="370" rx="0" ry="0" width="206" height="16" />
    <circle cx="33" cy="306" r="17" />
  </ContentLoader>
);

export default FilmCardLoader;
