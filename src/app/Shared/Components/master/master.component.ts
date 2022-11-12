import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../Services/AppData/app-data.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(protected _appData: AppDataService) { }

  ngOnInit(): void {
  }

}
