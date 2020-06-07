import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataView, DataUtilitiesService } from './data-utilities.service';
//declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DataUtilitiesService ]
})
export class AppComponent implements OnInit {
  id: string;
  house: string;
  private interval: string;
  private start: string;
  private duration: string;
  src: string;
  data: DataView;

  constructor(public elementRef: ElementRef, private http: HttpClient, private _dataUtilitiesService: DataUtilitiesService) {
    let native = this.elementRef.nativeElement;
    this.id = native.getAttribute("id");
    this.house = native.getAttribute("house");
    this.interval = native.getAttribute("interval");
    this.start = native.getAttribute("start");
    this.duration = native.getAttribute("duration");
    this.src = native.getAttribute("src");
  }

  getData(url: string): void {
    this.http.get<DataView>(url).subscribe(data => (this.data = this._dataUtilitiesService.insertAverage(data, ['used'], ['adu'])));
  }

  ngOnInit() {
    const url = this.src + '/api/houses/' + this.house + '/views/summary/?interval=' + this.interval + '&start=' + this.start + '&duration=' + this.duration;
    this.getData(url);
  }

}
