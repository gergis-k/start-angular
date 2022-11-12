import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../Services/AppData/app-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected _appData: AppDataService) { }

  ngOnInit(): void {
  }

}
