import { SearchMeta, Stock } from './stocks-types';

export type StockGetSuccessAction = ReturnType<typeof stockGetSuccessAction>;
export const STOCK_GET_ACTION = 'STOCK_GET_ACTION';

export const stockGetSuccessAction = (stocks: Stock[], meta: SearchMeta) => {
  return {
    type: STOCK_GET_ACTION,
    stocks,
    meta,
  };
};

export type StockSortSuccessAction = ReturnType<typeof stockGetSuccessAction>;
export const STOCK_SORT_ACTION = 'STOCK_SORT_ACTION';

export const stockSortSuccessAction = (stocks: Stock[], meta: SearchMeta) => {
  return {
    type: STOCK_GET_ACTION,
    stocks,
    meta,
  };
};
