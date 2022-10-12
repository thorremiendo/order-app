import { Order } from './../../core/models/order.model';
import { createAction, props } from '@ngrx/store';

export const getOrders = createAction('[Order] Get order');
export const addOrders = createAction(
  '[Order] Add order',
  (order: Order) => order
);

export const deleteOrder = createAction(
  '[Order] Delete order',
  (orderId: number) => ({ orderId })
);

export const updateOrder = createAction(
  '[Order] Update order',
  (order: Order) => ({ order })
);
