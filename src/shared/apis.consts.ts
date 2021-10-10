export enum Apis {
  GRID = 'https://api.simplywall.st/api/grid/filter?include=info,score',
}

export interface GridApiProps {
  id: string;
  no_result_if_limit: boolean;
  offset: number;
  size: number;
  state: 'read';
  rules: string;
}
