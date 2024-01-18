// customer-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<any[]> | undefined;
  searchTerm: string = '';
  editedCustomer: any = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    this.customers$ = this.customerService.getCustomers().pipe(
      catchError((error) => {
        console.error('Error fetching customers: ', error);
        throw error;
      })
    );
  }

  searchCustomers(): void {
    if (this.searchTerm.trim() === '') {
      this.fetchCustomers();
    } else {
      this.customers$ = this.customerService
        .searchCustomers(this.searchTerm)
        .pipe(
          switchMap((result: any) => of(result)),
          catchError((error) => {
            console.error('Error searching customers:', error);
            return of([]);
          })
        );
    }
  }

  editCustomer(customer: any): void {
    this.editedCustomer = { ...customer };
  }
  saveEditCustomer(): void {
    this.customerService
      .updateCustomer(this.editedCustomer.id, this.editedCustomer)
      .subscribe(
        (result) => {
          console.log('Customer updated succesfully: ', result);
          this.fetchCustomers();
          this.editedCustomer = null;
        },
        (error) => {
          console.log('Error updating customer: ', error);
        }
      );
  }
  cancelEdit(): void {
    this.editedCustomer = null;
  }

  deleteCustomer(customerId: number): void {
    const confirmDelete = confirm(
      'Are you sure want to delete this customer? '
    );

    if (confirmDelete) {
      this.customerService.deleteCustomer(customerId).subscribe(
        (result) => {
          console.log('Customer delted succesfuly: ', result);
          this.fetchCustomers;
        },
        (error) => {
          console.error('Error deleting customer : ', error);
        }
      );
    }
  }

  addNewCustomer(): void {
    const newCustomer: any = {
      fullName: 'New Customer',
    };
  }
}
