import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import * as config from '../config/config.json';
import * as xml2js from 'xml2js';
import * as moment from 'moment';

import { WxOb } from './wxob';

@Injectable()
export class WxObService {

  private wundergroundApi = (<any>config).wundergroundApiUrl + (<any>config).wundergroundId;

  constructor(private http: Http) { }

  getLatestObservation(): Promise<WxOb> {
    return this.http.get(this.wundergroundApi)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let wxob = new WxOb;

    let parser = new xml2js.Parser({ explicitArray: false, valueProcessors: [xml2js.processors.parseNumbers] });
    let r = parser.parseString(res.text(), function (err, json) {
      let wx = json.day_observations.current_observation[json.day_observations.current_observation.length - 1];
      wxob.link = wx.history_url;
      wxob.datetime = moment(wx.observation_time_rfc822);
      wxob.location = wx.location.neighborhood;
      wxob.city = wx.location.city;
      wxob.state = wx.location.state;
      wxob.lat = wx.location.latitude;
      wxob.lon = wx.location.longitude;
      wxob.temp_f = wx.temp_f;
      wxob.temp_c = wx.temp_c;
      wxob.humidity = wx.relative_humidity;
      wxob.dewpoint_f = wx.dewpoint_f;
      wxob.dewpoint_c = wx.dewpoint_c;
      wxob.baro_i = wx.pressure_in;
      wxob.baro_m = wx.pressure_mb;
      wxob.wind_d = wx.wind_degrees === -9999 ? 0 : wx.wind_degrees;
      wxob.wind_m = wx.wind_mph;
      wxob.wind_g = wx.wind_gust_mph;
      wxob.precip_i = wx.precip_1hr_in;
      wxob.precip_m = wx.precip_1hr_metric;
      wxob.precip_i_today = wx.precip_today_in;
      wxob.precip_m_today = parseFloat(wx.precip_today_metric.replace(' mm', ''));
    });

    return wxob;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
