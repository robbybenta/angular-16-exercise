import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  name: string = '';
  feedback: string = '';

  onSubmit(){
    if(!this.name || !this.feedback) return
    const isConfirmed = confirm(`${this.name}, are you sure to give feedback "${this.feedback}"?`)
    if(isConfirmed){
      alert('Feedback has been submitted')
      this.name = '';
      this.feedback = '';
    }
    else{
      alert('Feedback not submitted')
    }
  }

}
