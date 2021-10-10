import React from 'react';
import { NavigationItem } from './item-navigation';

import './navigation.scss';

export const Navigation = () => {
  const links = [
    {
      content: 'Home',
      url: '/',
    },

    {
      content: 'Stocks',
      url: '/stocks',
      active: true,
    },
    {
      content: 'Discover',
      url: '/discover',
    },
    {
      content: 'Watchlist',
      url: '/watchlist',
    },
    {
      content: 'Portfolios',
      url: '/portfolios',
    },
    {
      content: 'Screener',
      url: '/screner',
    },
  ];
  return (
    <nav>
      <ul className="nav">
        {links.map((link) => (
          <NavigationItem
            url={link.url}
            content={link.content}
            active={link.active}
            key={link.url}
          />
        ))}
      </ul>
    </nav>
  );
};
