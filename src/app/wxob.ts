import * as config from '../config/config.json';
import * as moment from 'moment';

export class WxOb {
    link: string;
    datetime: moment.Moment;
    location: string;
    city: string;
    state: string;
    lat: number;
    lon: number;
    temp_f: number;
    temp_c: number;
    humidity: number;
    dewpoint_f: number;
    dewpoint_c: number;
    baro_i: number;
    baro_m: number;
    wind_d: number;
    wind_m: number;
    wind_g: number;
    precip_i: number;
    precip_m: number;
    precip_i_today: number;
    precip_m_today: number;

    getMetar(): string {
        // METAR Refs:
        // http://www.ofcm.gov/publications/fmh/FMH1/FMH1.pdf

        var m = 'METAR ';

        // Location
        m += (<any>config).metarId + ' ';

        // date/time
        m += moment(this.datetime).utc().format('DDkkmm') + 'Z ';

        // Report type
        m += 'AUTO ';

        // Wind
        // 1 mph = 1.15077944802 kts
        var s = '000' + this.wind_d;
        let windDir = s.substr(s.length - 3);

        s = '000' + Math.round(this.wind_m * 1.15077944802);
        let windSpeed = s.substr(s.length - 2);

        s = '000' + Math.round(this.wind_g * 1.15077944802);
        let windGust = s.substr(s.length - 2);

        m += windDir + windSpeed
        if (this.wind_g > 0) {
            m += 'G' + windGust;
        }
        m += 'KT ';

        // Precipitation
        // Light Up to 0.10 inch per hour
        // Moderate 0.11 inch to 0.30 inch per hour
        // Heavy More than 0.30 inch per hour

        if (this.precip_i !== 0.0) {
            if (this.precip_i < 0.10) {
                m += '-';
            }
            if (this.precip_i > 0.30) {
                m += '+';
            }
            m += 'RA ';
        }

        // Temp & Dewpoint
        m += Math.round(this.temp_c).toString().replace('-', 'M');
        m += '/';
        m += Math.round(this.dewpoint_c).toString().replace('-', 'M');
        m += ' ';

        // Pressure
        m += 'A' + this.baro_i.toString().replace('.', '') + ' ';

        // Station type
        m += 'RMK A01';

        return m;
    }
}