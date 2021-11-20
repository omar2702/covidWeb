import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Form, Result} from "../models/data"

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  basePath = "http://localhost:8001";
  constructor(private http: HttpClient ) { }

  getAllData(): any {
    return this.http.get<Form[]>(this.basePath + "/list")
  }

  postData( k: number, data : Form) {
    return this.http.post<Form>(this.basePath + `/knn?k=${k}`, data)
  }
}
