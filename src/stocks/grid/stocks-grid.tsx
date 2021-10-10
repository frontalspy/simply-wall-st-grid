import React from 'react';
import './grid-stocks.scss';

export const StocksGrid = ({ children }) => {
  return (
    <table className="stock-grid">
      <thead>
        <tr>
          <th>Company Code</th>
          <th>Company Name</th>
          <th>Snowflake score</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
