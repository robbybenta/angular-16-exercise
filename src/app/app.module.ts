import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './components/projects/project.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { VideosComponent } from './components/videos/videos.component';
import { CarousalComponent } from './components/carousal/carousal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProfileComponent,
    FeedbackComponent,
    VideosComponent,
    CarousalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
