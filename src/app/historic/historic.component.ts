import { Component, OnInit } from '@angular/core';
import { Form } from '../models/data'
import {DataApiService} from "../ApiService/Api_service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {
  elements :  Form[] = [];

  constructor(private data : DataApiService) { }

  ngOnInit(): void {
    this.data.getAllData()
      .subscribe( (data: Form[]) => {
        this.elements = data
      });
  }

  test() {
    this.elements.pop()
    console.log(this.elements)
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

}
