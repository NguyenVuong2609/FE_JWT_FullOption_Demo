import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../service/token.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateSingerComponent} from "../create-singer/create-singer.component";

@Component({
  selector: 'app-page-singer',
  templateUrl: './page-singer.component.html',
  styleUrls: ['./page-singer.component.css']
})
export class PageSingerComponent implements OnInit {
  checkUserLogin = false;

  constructor(private tokenService: TokenService,
              private dialog: MatDialog,) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkUserLogin = true;
    }
  }

  openDialog() {
    const dialogRef1 = this.dialog.open(CreateSingerComponent);
    dialogRef1.afterClosed().subscribe(result => {
      if (result || result == undefined) {
      }
    });
  }
}
