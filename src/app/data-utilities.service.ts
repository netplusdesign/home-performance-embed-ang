import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';

export interface ViewSummaryTotals {
  used: number;
  solar: number;
  net: number;
  adu?: number;
  hdd: number;
}

export interface ViewSummary {
  date: string;
  used: number;
  solar: number;
  net: number;
  adu?: number;
  hdd: number;
}

export interface DataView {
  interval: string;
  items: ViewSummary[]
  totals: ViewSummaryTotals;
  view: string;
} 

@Injectable({
  providedIn: 'root'
})
export class DataUtilitiesService {

  constructor() { }

  insertAverage(data: DataView, props: string[], avg_props: string[]): DataView {

    let i: number, j: number, d: number,
    adu: number,
    daysInMonth: number,
    daysInYear: number,
    totalDays: number = 0;

    if (data.interval === 'year') {
      // years
      for ( j = 0; j < data.items.length; j++ ) {
        // assume for now that yearly date ranges always start in January
        daysInYear = 365;
        if ( moment( data.items[j].date ).isLeapYear() ) { daysInYear++; }

        for ( i = 0; i < props.length; i++ ) {

          adu = data.items[j][ props[i] ] / daysInYear;
          data.items[j][ avg_props[i] ] = adu;
        }

        totalDays = totalDays + daysInYear;
      }
    } else {
      // months
      for ( j = 0; j < data.items.length; j++ ) {

        for ( i = 0; i < props.length; i++ ) {

          daysInMonth = moment( data.items[j].date ).daysInMonth();
          adu = data.items[j][ props[i] ] / daysInMonth;
          data.items[j][ avg_props[i] ] = adu;
        }

        totalDays = totalDays + daysInMonth;
      }
    }
    // total
    for ( i = 0; i < props.length; i++ ) {

      adu = data.totals[ props[i] ] / totalDays;
      data.totals[ avg_props[i] ] = adu;
    }
    //console.log(JSON.stringify(data));
    return data;
  }

}
