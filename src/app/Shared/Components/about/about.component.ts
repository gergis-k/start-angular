import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../Services/AppData/app-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(protected _appData: AppDataService) { }

  ngOnInit(): void {
  }

}
