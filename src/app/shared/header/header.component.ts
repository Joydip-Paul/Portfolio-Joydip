import { Component, OnInit, Renderer2 } from '@angular/core';
import { DarkmodeService } from 'src/app/service/darkmode/darkmode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  darkActive: boolean = true;
  lightActive: boolean = false;

  constructor(
    private darkModeService: DarkmodeService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  toggleMode(darkmode: any) {
    document.documentElement.className = darkmode;
    this.darkActive = false;
    this.lightActive = true;
  }

  toggleMode2(lightmode: any) {
    document.documentElement.className = lightmode;
    this.darkActive = true;
    this.lightActive = false;
  }
}
