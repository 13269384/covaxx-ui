import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {BookingPageComponent} from './pages/booking-page/booking-page.component';
import {PatientComponent} from './pages/patient/patient.component';
import {PractitionerComponent} from './pages/practitioner/practitioner.component';
import {SessionsComponent} from './pages/sessions/sessions.component';
import {ConfirmationComponent} from './pages/confirmation/confirmation.component';

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

  {
    path: 'patient/practice/practitioner',
    component: PractitionerComponent
  },

  {
    path: 'patient/practice/practitioner/sessions',
    component: SessionsComponent
  },

  {
    path: 'patient/practice/practitioner/sessions/confirmation',
    component: ConfirmationComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
