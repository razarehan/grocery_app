export class Recipe {
  public name = '';
  public description = '';
  public imagePath = '';
  
  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
 }