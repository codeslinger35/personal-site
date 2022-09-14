import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IListItemSelectEventData } from '@tylertech/forge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'colby-benway';

  drawerOpen: boolean = false;

  constructor(private router: Router) {
    this.router.navigate([``]);
  }

  public toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

  public github() {
    window.open('https://www.github.com/codeslinger35', '__blank');
  }

  public goTo(selected: IListItemSelectEventData) {
    this.router.navigate([selected.value]).then( () => this.toggleDrawer());
  }
}
