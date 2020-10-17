import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('headerAnimation',[
      state('inactive',style({
        transform:'scale(1)'
      })),
      state('active',style({
        transform:'scale(1.5)'
      })),
      transition('active <=> inactive', animate('500ms ease-in-out' ))
    ])
  ]
})
export class AppComponent {
  title = 'gestion des relations clients';
  buttonState = true;
  headerState = 'inactive';

  animateHeader(){
    this.headerState = (this.headerState === 'inactive' ? 'active': 'inactive')
    //this.buttonState = (this.buttonState ? false : true );
  }
}

