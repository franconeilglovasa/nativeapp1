import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'

// somewhere at top of your component or bootstrap file
import { registerElement } from "@nativescript/angular";
import { Video } from 'nativescript-videoplayer';
registerElement("VideoPlayer", () => Video);
// documentation: https://docs.nativescript.org/angular/plugins/angular-third-party.html#simple-elements

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
