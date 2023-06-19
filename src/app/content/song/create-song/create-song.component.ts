import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";
import {FormControl, Validators} from "@angular/forms";
import {Song} from "../../../model/Song";
import {SongService} from "../../../service/song.service";

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit{
  listCategory: Category[] = [];
  form: any = {};
  song?: Song;
  status = 'Form create song';

  validateCategory = new FormControl('',[
    Validators.required
  ])
  constructor(private categoryService : CategoryService,
              private songService: SongService) {
  }
  ngOnInit(): void {
    this.categoryService.getListCategory().subscribe(data =>{
      this.listCategory = data;
    })
  }

  createSong() {
    if (this.form.category == undefined){
      this.status = "Please select one Category";
      return;
    }
    if (this.form.avatar == undefined){
      this.status = "Please upload avatar";
      return;
    }
    if (this.form.mp3Url == undefined){
      this.status = "Please upload file";
      return;
    }
    this.song = new Song(
      this.form.name,
      this.form.avatar,
      this.form.lyrics,
      this.form.mp3Url,
      this.form.category
    )
    this.songService.createSongService(this.song).subscribe(data =>{
      if (data.message == 'create_success'){
        this.status = 'Create Song successful!'
      }
    })
  }

  onUploadAvatar($event: string) {
    this.form.avatar = $event;
  }

  onUploadFile($event: string) {
    this.form.mp3Url = $event;
  }
}
