import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MatDrawer) drawer!: MatDrawer;
  title = 'colby-benway';

  drawerOpen: boolean = false;

  constructor(private router: Router) {
    this.router.navigate([``]);
  }

  public toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
    this.drawer.toggle();
  }

  public github() {
    window.open('https://www.github.com/codeslinger35', '__blank');
  }

  public goTo(route: string) {
    this.router.navigate([route]).then(() => {this.drawer.toggle()});
  }
}
