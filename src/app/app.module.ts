import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { RoomListComponent } from './room-list/room-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { ServeListComponent } from './serve-list/serve-list.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationServeListComponent } from './reservation-serve-list/reservation-serve-list.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
const routes: Routes = [
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'edit-customer/:id', component: EditCustomerComponent },
  { path: 'delete-customer', component: DeleteCustomerComponent },
  { path: 'room-list', component: RoomListComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'feature-list', component: FeatureListComponent },
  { path: 'serve-list', component: ServeListComponent },
  { path: 'reservation-list', component: ReservationListComponent },
  { path: 'reservation-serve-list', component: ReservationServeListComponent },
  { path: `checkout-list`, component: CheckoutListComponent },
];

@NgModule({
  declarations: [],
  imports: [FormsModule, BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [],
})
export class AppModule {
  ngDoBootstrap() {}
}
