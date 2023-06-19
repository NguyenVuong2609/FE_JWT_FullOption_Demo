import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SongService} from "../../../service/song.service";
import {Song} from "../../../model/Song";

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit{
  // @ts-ignore
  song = new Song();
  author = "";
  constructor(private actRouter: ActivatedRoute,
              private songService: SongService) {
  }
  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(songId =>{
      // @ts-ignore
      const id = +songId.get("id");
      this.songService.getSongDetail(id).subscribe(data=>{
        this.song = data;
        this.author = data.user.name;
      })
    })
  }

}
