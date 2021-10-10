import React from 'react';
import './sort-stocks.scss';

export type SortDirections = 'asc' | 'desc';

interface StockSortProps {
  sortCallback: (direction: SortDirections) => void;
}

export const StockSort: React.FC<StockSortProps> = ({ sortCallback }) => {
  const [sort, setSort] = React.useState<SortDirections>('desc');

  const sortStocks = React.useCallback(() => {
    const newSort = sort === 'asc' ? 'desc' : 'asc';
    setSort(newSort);
    sortCallback(newSort);
  }, [sort]);

  return (
    <div className="sort">
      Market Cap:{' '}
      <button className="button sort-button" onClick={sortStocks}>
        <span className="sr">{sort}</span>
        {sort === 'asc' ? '↑' : '↓'}
      </button>
    </div>
  );
};
