import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateSongComponent} from "../create-song/create-song.component";
import {TokenService} from "../../../service/token.service";

@Component({
  selector: 'app-page-song',
  templateUrl: './page-song.component.html',
  styleUrls: ['./page-song.component.css']
})
export class PageSongComponent implements OnInit{
  checkUserLogin = false;
  constructor(private dialog: MatDialog,
              private tokenService: TokenService) {
  }
  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.checkUserLogin = true;
    }
  }
  openDialogCreate() {
    const dialogRef1 = this.dialog.open(CreateSongComponent);
    dialogRef1.afterClosed().subscribe(result => {
      if (result || result == undefined){
      }
    });
  }
}
