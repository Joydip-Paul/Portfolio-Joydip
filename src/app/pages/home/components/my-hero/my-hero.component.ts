import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.scss'],
})
export class MyHeroComponent implements OnInit {
  @ViewChild('box1') box: ElementRef;
  @ViewChildren('btn') btnContainers: QueryList<ElementRef>;

  constructor() {}

  ngOnInit(): void {
    gsap.from('.hero-content__left', { opacity: 0, duration: 1, y: -50 });

    gsap.from('.hero-content__right', {
      y: -1000,
      x: 0,
      duration: 0.8,
      ease: 'bounce',
      scale: 1.5,
    });
  }
}
