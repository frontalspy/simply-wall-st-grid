import React, { Fragment, useCallback } from 'react';
import { PaginationControls } from '../shared/pagination/controls-pagination';
import { StocksGrid } from './grid/stocks-grid';
import { StockItem } from './item/item-stocks';
import { SortDirections, StockSort } from './sort/sort-stocks';
import { useGetStocks } from './stocks.hooks';

export const Stocks = () => {
  const stocksPerPage = 20;
  const [sort, setSort] = React.useState<SortDirections>('desc');
  const [page, setPage] = React.useState<number>(0);
  const [stocks, meta, error] = useGetStocks(page, stocksPerPage, sort);

  const nextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const prevPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);

  if (error) {
    return (
      <div className="error">
        <h2>
          An Error has occured fetching the latest data. Please refresh the page
          and try again
        </h2>
      </div>
    );
  }

  // Small workaround to only show the latest amount of stocks, otherwise show loading
  if (stocks && stocks.length >= (page + 1) * 20) {
    return (
      <div>
        <Fragment>
          <StockSort sortCallback={setSort} />
          <StocksGrid>
            {stocks.slice(page * 20, (page + 1) * 20).map((stock) => (
              <StockItem key={stock.id} stock={stock} />
            ))}
          </StocksGrid>

          <PaginationControls
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
            total={meta.total_records}
            perPage={stocksPerPage}
          />
        </Fragment>
      </div>
    );
  }

  return (
    <div className="loading">
      We&apos;re fetching the latest data, hold tight
      <div className="loader"></div>
    </div>
  );
};
