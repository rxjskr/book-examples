import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ReactiveFormsModule 을 가져와서,
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // 의존성 목록에 ReactiveFormsModule 추가
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
