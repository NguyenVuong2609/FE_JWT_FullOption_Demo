import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Singer} from "../model/Singer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SingerService {
  private API_SINGER = environment.API_LOCAL + 'singer';

  constructor(private httpClient: HttpClient) { }
  createSingerService(singer: Singer): Observable<any>{
    return this.httpClient.post(this.API_SINGER, singer);
  }
  getListSingerService(): Observable<any>{
    return this.httpClient.get(this.API_SINGER);
  }
}
