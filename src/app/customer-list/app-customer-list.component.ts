// app-customer-list.component.ts

import { Component } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class AppCustomerListComponent {
  customers$:
    | Observable<undefined>
    | Subscribable<undefined>
    | Promise<undefined>
    | undefined;
  searchCustomers() {
    throw new Error('Method not implemented.');
  }
}
