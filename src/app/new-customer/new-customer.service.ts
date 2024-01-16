import { NewCustomerComponent } from './new-customer.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewCustomerService {
  private apiUrl = `http://localhost:8080/api/customers`;
  constructor(private http: HttpClient) {}

  addNewCustomer(NewCustomer: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, NewCustomer);
  }
}
