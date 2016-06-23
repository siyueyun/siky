import { Component } from '@angular/core';
import { ClickMeComponent }    from './click-me.component';
import { NavTopComponent }    from './nav-top.component';

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  directives: [
	  ClickMeComponent, NavTopComponent
  ]
})
export class AppComponent { }
