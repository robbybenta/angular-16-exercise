import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  channel = {
    title : 'Interview Pro',
    subtitle : 'Learn - Code - Skill UP',
    logoSrc : '/assets/logo-interview.png',
  }

  shouldDisable : boolean = true; 
}
