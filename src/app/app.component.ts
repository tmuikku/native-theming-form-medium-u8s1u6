import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isSwitcherShown = false;

  toggleThemeSwitcher() {
    this.isSwitcherShown = !this.isSwitcherShown;
  }

}
