import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService, Practitioner} from '../../services/api.service';

@Component({
  selector: 'app-practitioner',
  templateUrl: './practitioner.component.html',
  styleUrls: ['./practitioner.component.css']
})
export class PractitionerComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public api: ApiService
  )
  { }

  // @ts-ignore
  currentPractitioners: Practitioner[];

  async ngOnInit(): Promise<void> {

    this.currentPractitioners = await this.api.getPractitioners();

  }

}
