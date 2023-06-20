import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateSongComponent} from "../create-song/create-song.component";
import {TokenService} from "../../../service/token.service";
import {Song} from "../../../model/Song";
import {SongService} from "../../../service/song.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-page-song',
  templateUrl: './page-song.component.html',
  styleUrls: ['./page-song.component.css']
})
export class PageSongComponent implements OnInit{
  checkUserLogin = false;
  listSong?: Song[];
  totalElements = 3;
  constructor(private dialog: MatDialog,
              private tokenService: TokenService,
              private songService: SongService) {
  }
  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.checkUserLogin = true;
    }
    const request = {page: 0, size: 3}
    this.getPageRequest(request);
  }
  openDialogCreate() {
    const dialogRef1 = this.dialog.open(CreateSongComponent);
    dialogRef1.afterClosed().subscribe(result => {
      if (result || result == undefined){
      }
    });
  }
  getPageRequest(request: any) {
    this.songService.getPageSong(request).subscribe(data => {
      this.listSong = data["content"];
      console.log(this.listSong)
    })
  }
  nextPage($event: PageEvent) {
    const request = {};
    // @ts-ignore
    request['page'] = $event.pageIndex.toString();
    // @ts-ignore
    request['size'] = $event.pageSize.toString();
    this.getPageRequest(request);
  }
}
