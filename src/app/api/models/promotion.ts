/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { Order } from '../models/order';
export interface Promotion {
  creationDate?: string;
  description?: string | null;
  discountAmount?: number;
  endDate?: string;
  id?: number;
  isActive?: boolean;
  minimumPurchaseAmount?: number;
  order?: Order;
  orderId?: number | null;
  programName?: string | null;
  promotionId?: string | null;
  startDate?: string;
  usageLimit?: number | null;
}