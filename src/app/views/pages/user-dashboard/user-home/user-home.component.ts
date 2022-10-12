import { OrderService } from './../../../../core/services/order.service';
import { OrderState } from './../../../../store/reducers/order.reducers';
import {
  getOrders,
  addOrders,
  updateOrder,
} from './../../../../store/actions/order.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  public orderForm: FormGroup;
  public editMode;
  public selectedOrder;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store,
    private orderService: OrderService
  ) {
    this.orderForm = this.fb.group({
      item: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.orderService.editMode.subscribe((status) => {
      this.editMode = status;
      if (this.editMode == true) {
        this.orderService.selectedOrder.subscribe((order) => {
          this.selectedOrder = order;
          this.orderForm.patchValue({
            item: order.item,
            status: 'Pending',
          });
        });
      }
    });
  }

  updateOrder() {
    const o = { ...this.selectedOrder };
    o.item = this.orderForm.value.item;
    console.log(o);
    this.store.dispatch(updateOrder(o));
  }
  getOrders() {
    this.store.dispatch(getOrders());
  }

  addNewOrder() {
    if (this.editMode == true) {
      this.updateOrder();
      this.selectedOrder = null;
      this.orderService.editMode.next(false);
      this.orderService.selectedOrder.next(null);
      this.orderForm.reset();
    } else {
      let data = {
        item: this.orderForm.value.item,
        status: 'Pending',
        id: Math.round(Math.random() * 10000).toString(),
      };
      this.store.dispatch(addOrders(data));
      this.orderForm.reset();
    }
  }
}
