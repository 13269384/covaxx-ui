import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {BookingPageComponent} from './pages/booking-page/booking-page.component';
import {PatientComponent} from './pages/patient/patient.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },

  {
    path: 'patient/practice',
    component: BookingPageComponent
  },

  {
    path: 'patient',
    component: PatientComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
