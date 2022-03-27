import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MatDrawer) drawer!: MatDrawer;
  title = 'colby-benway';

  drawerOpen: boolean = false;

  public toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
    this.drawer.toggle();
  }
}
