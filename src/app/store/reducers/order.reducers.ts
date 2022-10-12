import { deleteOrder } from 'src/app/store/actions/order.action';
import { getOrders, addOrders, updateOrder } from './../actions/order.action';
import { Order } from './../../core/models/order.model';
import { createReducer, on } from '@ngrx/store';

export interface OrderState {
  orders: ReadonlyArray<Order>;
}

const initialState: ReadonlyArray<Order> = [];

export const orderReducer = createReducer(
  initialState,
  on(getOrders, (state) => [...state]),
  on(addOrders, (state, order) => [...state, order]),
  on(deleteOrder, (state, { orderId }) =>
    state.filter((order) => state.indexOf(order) !== orderId)
  ),
  on(updateOrder, (state, { order }) => {
    const orders = state.map((m) => {
      if (m.id === order.id) {
        return order;
      }
      return m;
    });
    return orders;
  })
);
