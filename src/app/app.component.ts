import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial-16';
  channel = {
    title : 'Interview Pro',
    subtitle : 'Learn - Code - Skill UP',
    logoSrc : '/assets/logo-interview.png',
  }

  shouldDisable : boolean = false; 
  isSubcribed: boolean = false;
  yourChannel: boolean = false;
  onSubscribeClick(channel: any, event: any){
    this.isSubcribed = !this.isSubcribed;
    console.log(event, 'event angular');
    
    alert(`You are ${this.isSubcribed ? 'Subscribed' : 'Unsubscribed'} to this channel : ${channel.title} `);
  }
}

