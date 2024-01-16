import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditCustomerService {
  private apiUrl = `http://localhost:8080/api/customers-edit`;

  constructor(private http: HttpClient) {}
  updateCustomer(id: number, editedCustomer: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, editedCustomer);
  }
}
