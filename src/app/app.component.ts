import { Component, OnDestroy, OnInit } from '@angular/core';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';
  darkMode: boolean = false;
  private lenis?: Lenis;
  private animationFrameId?: number;

  constructor() { }

  ngOnInit(): void {
    this.lenis = new Lenis({ autoRaf: false });
    this.animationFrameId = window.requestAnimationFrame(this.raf);
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== undefined) {
      window.cancelAnimationFrame(this.animationFrameId);
    }

    this.lenis?.destroy();
  }

  private raf = (time: number): void => {
    this.lenis?.raf(time);
    this.animationFrameId = window.requestAnimationFrame(this.raf);
  };
}
