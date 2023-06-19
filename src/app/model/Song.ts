import {Category} from "./Category";

export class Song{
  public name?: string;
  public avatar?: string;
  public lyrics?: string;
  public mp3Url?: string;
  public category?: Category;


  constructor(name: string, avatar: string, lyrics: string, mp3Url: string, category: Category) {
    this.name = name;
    this.avatar = avatar;
    this.lyrics = lyrics;
    this.mp3Url = mp3Url;
    this.category = category;
  }
}
