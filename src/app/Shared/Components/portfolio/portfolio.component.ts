import { Component, OnInit } from '@angular/core';
import { IPortfolioItem } from '../../Interfaces/PortfolioItem/iportfolio-item';
import { AppDataService } from '../../Services/AppData/app-data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(protected _appData: AppDataService) {}

  basPath: string = 'assets/imgs/portfolio';

  data: IPortfolioItem[] = [
    {
      id: 1,
      title: 'LOG CABIN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet',
      image: '/cabin.png',
      tags: ['Angular', 'Bootstrap', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'TASTY CAKE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet',
      image: '/cake.png',
      tags: ['Angular', 'Bootstrap', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 3,
      title: 'CIRCUS TENT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet',
      image: '/circus.png',
      tags: ['Angular', 'Bootstrap', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 4,
      title: 'CONTROLLER',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet',
      image: '/game.png',
      tags: ['Angular', 'Bootstrap', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 5,
      title: 'LOCKED SAFE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet',
      image: '/safe.png',
      tags: ['Angular', 'Bootstrap', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 6,
      title: 'SUBMARINE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet',
      image: '/submarine.png',
      tags: ['Angular', 'Bootstrap', 'HTML', 'CSS', 'JavaScript']
    }
    ];

  ngOnInit(): void {
  }

}
