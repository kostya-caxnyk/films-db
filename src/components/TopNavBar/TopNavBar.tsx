import React from 'react';
import { Link } from 'react-router-dom';

import s from './TopNavBar.module.scss';

import { NavItem } from './components';

interface ILink {
  [propName: string]: string;
}

interface INavLinks {
  Movies: ILink[];
  'TV shows': ILink[];
  People: ILink[];
}

const navLinksData: INavLinks = {
  Movies: [
    { Popular: '/movie/popular' },
    { 'Now Playing': '/movie/now-playing' },
    { Upcoming: '/movie/upcoming' },
    { 'Top Rated': '/movie/top-rated' },
  ],
  'TV shows': [
    { Popular: '/tv/popular' },
    { 'Airing Today': '/tv/airing-today' },
    { 'On Tv': '/tv/on-the-air' },
    { 'Top Rated': '/tv/top-rated' },
  ],
  People: [{ 'Popular People': '/person/popular' }],
};

const TopNavBar = () => {
  return (
    <div className={s.topBar}>
      <div className="container">
        <nav className={s.nav}>
          <Link to="/" className={s.logoLink}>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt=""
              className={s.logo}
            />
          </Link>
          <ul className={s.links}>
            {Object.entries(navLinksData).map((arr: [string, Array<ILink>]) => (
              //деструктoризация в map from object.entries??
              <li key={arr[0]} className={s.link}>
                <NavItem label={arr[0]} links={arr[1]} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNavBar;
