import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../Services/AppData/app-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(protected _appData: AppDataService) { }

  ngOnInit(): void {
  }

}
