import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  
  constructor() { }

  readonly title: string = 'Start Angular';
  readonly subTitles: string[] = ['Graphic Artist', 'Web Designer', 'Illustrator'];
  readonly listItems: string[] = ['home', 'portfolio', 'about', 'contact'];
  readonly primaryColor: string = '#2c3e50';
  readonly secondaryColor: string = '#1abc9c';

}
