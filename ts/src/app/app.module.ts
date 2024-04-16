import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BigInfoComponent } from './components/big-info/big-info.component';
import { ResumeInfoComponent } from './components/resume-info/resume-info.component';
import { DiscussionsTopicComponent } from './components/discussions-topic/discussions-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    TopBarComponent,
    BigInfoComponent,
    ResumeInfoComponent,
    DiscussionsTopicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
