import { OrderService } from './../../core/services/order.service';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OrderState } from 'src/app/store/reducers/order.reducers';
import { deleteOrder, updateOrder } from 'src/app/store/actions/order.action';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss'],
})
export class OrderTableComponent implements OnInit {
  public user;
  public orders$ = this.store.select('orders');
  public orders;
  displayedColumns: string[] = ['item', 'status', 'action'];
  dataSource = this.orders$;
  constructor(
    private store: Store<OrderState>,
    private authService: AuthService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  editOrder(order) {
    this.orderService.updateEditMode(true);
    this.orderService.selectedOrder.next(order);
  }

  deleteOrder(order) {
    this.orders$.subscribe((res) => {
      this.orders = res;
    });
    const orderId = this.orders.indexOf(order);
    this.store.dispatch(deleteOrder(orderId));
  }

  handleStatus(order, status) {
    const o = { ...order };
    o.status = status;
    console.log(o);
    this.store.dispatch(updateOrder(o));
  }
}
