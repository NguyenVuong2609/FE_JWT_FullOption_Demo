export class Singer{
  public id?: number;
  public name?: string;
  public avatar?: string;
  public description?: string;
  public birthDay?: any;

  constructor(name: string, avatar: string, description: string, birthDay: any) {
    this.name = name;
    this.avatar = avatar;
    this.description = description;
    this.birthDay = birthDay;
  }
}
