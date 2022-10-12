import { Order } from './../../core/models/order.model';
import { OrderState } from 'src/app/store/reducers/order.reducers';
import { createSelector } from '@ngrx/store';

export const orderSelector = createSelector(
  (state: OrderState) => state.orders,
  (orders: ReadonlyArray<Order>) => orders
);
