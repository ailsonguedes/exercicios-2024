import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BigInfoComponent } from './components/big-info/big-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    TopBarComponent,
    BigInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
