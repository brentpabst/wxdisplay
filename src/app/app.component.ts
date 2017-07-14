import { Component, OnInit } from '@angular/core';

import * as config from '../config/config.json';
import * as moment from 'moment';
import { WxOb } from './wxob';
import { WxObService } from './wxob.service';

@Component({
  selector: 'body',
  host: {
    "[style.background-image]": "bodyBackgroundImage()"
  },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  wxob: WxOb;
  date: moment.Moment;

  constructor(private wxobService: WxObService) { }

  bodyBackgroundImage() {
    return 'url(' + (<any>config).imageUrl + ')';
  }

  loadCurrentTime() {
    this.date = moment();
  }

  getObservation(): void {
    this.wxobService
      .getLatestObservation()
      .then(wxob => this.wxob = wxob);
  }

  ngOnInit(): void {
    this.loadCurrentTime();
    setInterval(() => {
      this.loadCurrentTime();
    }, 5000);
    this.getObservation();
  }
}