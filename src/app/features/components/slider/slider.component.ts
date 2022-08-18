import { Component, OnInit } from '@angular/core';
import { CarouselController } from 'ng-simple-carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  controllerButton = new CarouselController();

  images: any[] = [
    {
      id: '1',
      src: '../../../../assets/grupo_1.png',
    },
    {
      id: '2',
      src: '../../../../assets/grupo_2.png',
    },
    {
      id: '3',
      src: '../../../../assets/grupo_3.png',
    },
    {
      id: '4',
      src: '../../../../assets/grupo_4.png',
    },
    {
      id: '5',
      src: '../../../../assets/grupo_5.png',
    },
    {
      id: '6',
      src: '../../../../assets/grupo_6.png',
    },
    {
      id: '7',
      src: '../../../../assets/grupo_7.png',
    },
    {
      id: '8',
      src: '../../../../assets/grupo_8.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
