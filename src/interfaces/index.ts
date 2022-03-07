import type { Document, Model } from 'mongoose';

export * from './IApiFile';
export * from './IFile';
export * from './ITranslationDecoratorInterface';

export interface IListDataPagination<T> {
  data: [T];
  page: number;
  perPage: number;
  total: number;
}

export interface IModel<T extends Document> extends Model<T> {
  queryBuilder: (any) => Promise<IListDataPagination<T>>;
}
