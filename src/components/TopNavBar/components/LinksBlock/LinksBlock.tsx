import React from 'react';
import { Link } from 'react-router-dom';

import s from './LinksBlock.module.scss';

interface ILink {
  [propName: string]: string;
}

interface LinksBlockProps {
  readonly links: ILink[];
}

const LinksBlock: React.FC<LinksBlockProps> = ({ links }) => {
  return (
    <div className={s.links}>
      <ul>
        {links.map((link: ILink) => {
          const label = Object.keys(link)[0];
          const toUrl = Object.values(link)[0];
          return (
            <li key={label} className={s.li}>
              <Link to={toUrl} className={s.link}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinksBlock;
