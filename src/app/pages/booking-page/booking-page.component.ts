import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService, Patient, Practice, Practitioner, Session} from '../../services/api.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  // // @ts-ignore
  // patientDisability: string;
  // // @ts-ignore
  // patientMedCondition: string;
  //
  // // @ts-ignore
  // patientOccupation: string;
  //
  //
  // // @ts-ignore
  // patient: Patient;
  // // @ts-ignore
  // patientId: string;
  //
  // // @ts-ignore
  // session: Session;
  // // @ts-ignore
  // sessionId: string;

  // @ts-ignore
  practice: Practice;

  // @ts-ignore
  // practiceId: '6613x' ;
  practitioner: Practitioner;


  constructor(
   public route: ActivatedRoute,
   public api: ApiService

  ) { }


// @ts-ignore
  currentPractices: Practice[];
  // @ts-ignore
  singlePractice: Practice;

  // @ts-ignore
  currentPractitioners: Practitioner[];

  // @ts-ignore
  availableSessions: Session[];

  // @ts-ignore
  currentPatients: Patients[];

  // @ts-ignore
  patient: Patient;

//   // @ts-ignore
//   currentSession: Session[];
  async ngOnInit(): Promise<void> {
//
//     // this.patientId = this.api.getPatient (this.route.snapshot.params.patientId) ;
//     // @ts-ignore
//     this.currentPractice = await this.api.getPractice();
//     // @ts-ignore
//     this.currentSession = await this.api.getSession();
//
//   }
//
//   // tslint:disable-next-line:typedef
//   Practice: any;
//   async submit() {
//     await this.api.createPatient(this.patient);

  // @ts-ignore
  //   this.practice = await this.api.getPractice(this.route.snapshot.params.practiceId) ;

    this.currentPractices = await this.api.getPractices();

    // this.singlePractice = await this.api.getPractice();

    this.currentPractitioners = await this.api.getPractitioners();

    this.availableSessions = await this.api.getSessions();

    this.currentPatients = await this.api.getPatients();
  }


  // tslint:disable-next-line:typedef
  submit(){
    this.api.createPatient(this.patient);
  }

}
