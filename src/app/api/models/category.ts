/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { Product } from '../models/product';
export interface Category {
  categoryId?: number;
  createOn?: string;
  image?: string | null;
  isActive?: boolean;
  name?: string | null;
  products?: Array<Product> | null;
  slug?: string | null;
  totalProduct?: number | null;
}
