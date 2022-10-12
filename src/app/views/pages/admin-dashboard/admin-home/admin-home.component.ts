import { OrderService } from './../../../../core/services/order.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateOrder } from 'src/app/store/actions/order.action';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
