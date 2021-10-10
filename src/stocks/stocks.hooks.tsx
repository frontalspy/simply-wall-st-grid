import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { Apis } from '../shared/apis.consts';
import { SortDirections } from './sort/sort-stocks';
import { StockAPI, StockAPIConfig } from './stocks-types';
import { STOCK_GET_ACTION, STOCK_SORT_ACTION } from './stocks.actions';
import { initStockState, stockReducer } from './stocks.reducer';

export const useGetStocks = (
  offset = 0,
  size = 12,
  order: SortDirections = 'asc'
) => {
  const [state, dispatch] = React.useReducer(stockReducer, initStockState);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    getStocksApi(offset, size, order)
      .then((res) => {
        const { data, meta } = res.data;
        dispatch({ type: STOCK_GET_ACTION, stocks: data, meta });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [offset, size]);

  // Market cap is not part of the object, so we need to do new API calls on each sort
  React.useEffect(() => {
    if (state.stocks) {
      getStocksApi(offset, size, order)
        .then((res) => {
          const { data, meta } = res.data;
          dispatch({ type: STOCK_SORT_ACTION, stocks: data, meta });
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    }
  }, [order]);

  return [state.stocks, state.meta, error] as const;
};

const getStocksApi = (offset: number, size: number, order: SortDirections) =>
  axios.post<StockAPIConfig, AxiosResponse<StockAPI>>(Apis.GRID, {
    id: '1',
    no_result_if_limit: true,
    offset: offset * size,
    size,
    state: 'read',
    rules: JSON.stringify([
      ['order_by', 'market_cap', order],
      ['primary_flag', '=', true],
      ['grid_visible_flag', '=', true],
      ['market_cap', 'is_not_null'],
      ['is_fund', '=', false],
      //['aor', ['country_name', 'in', ['au']]], CORS error
    ]),
  });
