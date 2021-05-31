import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService, Patient, Session} from '../../services/api.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  // @ts-ignore
  patientDisability: string;
  // @ts-ignore
  patientMedCondition: string;

  // @ts-ignore
  patient: Patient;
  // @ts-ignore
  patientId: string;

  // @ts-ignore
  session: Session;
  // @ts-ignore
  sessionId: string;

  constructor(
    // public route: ActivatedRoute
    public api: ApiService
  ) { }
// @ts-ignore
  currentPractice: Practice[];
  // @ts-ignore
  currentSession: Session[];
  async ngOnInit(): Promise<void> {

    // this.patientId = this.api.getPatient (this.route.snapshot.params.patientId) ;
    // @ts-ignore
    this.currentPractice = await this.api.getPractice();
    // @ts-ignore
    this.currentSession = await this.api.getSession();

  }

  // tslint:disable-next-line:typedef
  async submit() {
    await this.api.createPatient(this.patient);
  }
}
