/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { Customer } from '../models/customer';
import { Product } from '../models/product';
export interface Review {
  comment?: string | null;
  createOn?: string;
  customer?: Customer;
  customerId?: number;
  isActive?: boolean | null;
  product?: Product;
  productId?: number;
  reviewId?: number;
}