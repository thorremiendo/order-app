import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  editMode = new Subject<boolean>();
  selectedOrder = new Subject<any>();
  isApprove = new Subject<boolean>();

  constructor() {}

  updateEditMode(status: boolean) {
    this.editMode.next(status);
  }
}
