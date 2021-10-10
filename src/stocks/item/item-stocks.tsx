import React from 'react';
import './item-stocks.scss';
import { Stock } from '../stocks-types';

export interface StockItemProps {
  stock: Stock;
}
export const StockItem: React.FC<StockItemProps> = ({ stock }) => {
  const navigate = () => {
    location.replace(`.${stock.canonical_url}`);
  };
  return (
    <tr
      aria-labelledby={`${stock.name}-button`}
      tabIndex={0}
      onClick={navigate}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          navigate();
        }
      }}>
      <td className="company-name">
        {stock.name}
        <div className="hide-medium">Company Name</div>
      </td>
      <td className="company-code">
        {stock.ticker_symbol}
        <div className="hide-medium">Company Code</div>
      </td>
      <td className="snowflake-score">
        {stock.score.data.total}
        <div className="hide-medium">Company Score</div>
      </td>
    </tr>
  );
};
