// eslint-disable-next-line no-shadow
export enum Order {
  DESC,
  ASC,
}

export interface IPagination {
  offset?: number
  count?: number
  order?: Order
}
