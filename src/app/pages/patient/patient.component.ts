import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService, Patient} from '../../services/api.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public api: ApiService
  )
  { }

  // @ts-ignore
  currentPatients: Patients[];

  // @ts-ignore
  patient: Patient;


  async ngOnInit(): Promise<void> {

    this.currentPatients = await this.api.getPatients();

    // @ts-ignore
    this.patient = Patient;
}

  // tslint:disable-next-line:typedef
  submit(){
    this.api.createPatient(this.patient);
  }


}
