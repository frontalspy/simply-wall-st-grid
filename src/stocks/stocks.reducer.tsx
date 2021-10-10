import { SearchMeta, Stock } from './stocks-types';
import {
  StockGetSuccessAction,
  STOCK_GET_ACTION,
  STOCK_SORT_ACTION,
} from './stocks.actions';

interface StockState {
  stocks?: Stock[];
  meta?: SearchMeta;
}
export const initStockState = {};

export const stockReducer = (
  state: StockState = initStockState,
  action: StockGetSuccessAction
): StockState => {
  switch (action.type) {
    case STOCK_GET_ACTION:
      return {
        ...state,
        stocks: state.stocks?.concat(action.stocks) ?? action.stocks,
        meta: action.meta,
      };
    case STOCK_SORT_ACTION:
      return {
        ...state,
        stocks: action.stocks,
        meta: action.meta,
      };
    default:
      return { ...state };
  }
};
