import {
  Component,
  ElementRef,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';
import { DarkmodeService } from 'src/app/service/darkmode/darkmode.service';

@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.scss'],
})
export class MyHeroComponent implements OnInit {
  isDark = false;

  constructor(private darkModeService: DarkmodeService) {}

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
