import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  @ViewChild(MatDrawer) drawer!: MatDrawer;

  public closeSideBar(): void {
    this.drawer.close();
  }

  public openSideBar(): void {
    this.drawer.open();
  }

  public toggleSideBar(): void {
    this.drawer.toggle();
  }
}
