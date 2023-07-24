import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  private isDark = false;
  @Input() isDark2: boolean;

  private darkmodeState = new BehaviorSubject<boolean>(false);
  public darkmodeState$ = this.darkmodeState.asObservable();

  constructor() { }

  darkMode() {
    console.log("clicked from service");
    return this.isDark2 = true;
    // this.darkmodeState.next(true);
  }
}
