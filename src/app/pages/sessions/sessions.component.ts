import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService, Session} from '../../services/api.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  // @ts-ignore
  availableSessions: Session[];

  constructor(
    public route: ActivatedRoute,
    public api: ApiService
  )
  { }

  async ngOnInit(): Promise<void> {

    this.availableSessions = await this.api.getSessions();
  }

}
