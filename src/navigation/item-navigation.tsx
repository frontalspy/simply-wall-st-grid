import React from 'react';
import './item-navigation.scss';

export interface NavigationItemProps {
  content: string;
  url: string;
  active?: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  content,
  url,
  active,
}) => {
  return (
    <a
      className={`nav-item ${active ? 'active' : ''}`}
      href={url}
      rel="menu-item">
      {content}
    </a>
  );
};
