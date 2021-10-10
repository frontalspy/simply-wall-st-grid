export interface Stock {
  canonical_url: string;
  company_id: string;
  exchange_symbol: string;
  id: number;
  info: {
    data: StockInfo;
  };
  is_searchable: boolean;
  isin_symbol: string;
  last_updated: number; //Timestamp
  name: string;
  primary_canonical_url: string | null;
  primary_ticker: boolean;
  score: {
    data: StockScore;
  };
  slug: string;
  ticker_symbol: string;
  trading_item_id: number;
  unique_symbol: string;
}

export interface StockScore {
  future: number;
  health: number;
  income: number;
  management: number;
  misc: number;
  past: number;
  sentence: string;
  total: number;
  value: number;
}

export interface StockInfo {
  address: string;
  ceo: any;
  country: string;
  cover_small_url: string;
  cover_url: string;
  currency: string;
  description: string;
  employees: number;
  fund: boolean;
  id: string;
  industry: any;
  legal_name: string;
  logo_url: string;
  main_header: string;
  main_thumb: string;
  status: string;
  url: string;
  warning_type: number;
  year_founded: number;
}

export interface StockAPI {
  data: Stock[];
  meta: SearchMeta;
}

export interface SearchMeta {
  noResultIfLimit: boolean;
  real_total_records: number;
  state: string;
  total_records: number;
}

export interface StockAPIConfig {
  id: string;
  no_result_if_limit: boolean;
  offset: number;
  size: number;
  state: string;
  rules: string;
}
