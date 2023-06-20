import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Song} from "../model/Song";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SongService implements OnInit {
  ngOnInit(): void {
    const request = {page: 0, size: 3}
    this.getPageSong(request);
  }
  private API_SONG = environment.API_LOCAL + 'song';

  constructor(private httpClient: HttpClient) { }
  createSongService(song: Song): Observable<any>{
    return this.httpClient.post(this.API_SONG, song);
  }
  getSongDetail(id: number): Observable<any>{
    return this.httpClient.get(this.API_SONG + "/" + id)
  }
  getPageSong(request: any): Observable<any>{
    const params = request;
    return this.httpClient.get(this.API_SONG + "/page", {params})
  }
}
