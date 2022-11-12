import { Component, Input, OnInit } from '@angular/core';
import { IPortfolioItem } from '../../Interfaces/PortfolioItem/iportfolio-item';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class PortfolioItemComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
		config.keyboard = false
  }

  @Input() itemData: IPortfolioItem = { id: 0, title:'', description: '', image: '', tags: [] };
  @Input() basePath: string = '';


  ngOnInit(): void {
  }

  open(content:any) {
		this.modalService.open(content);
	}



}
