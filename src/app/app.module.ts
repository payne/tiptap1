import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxTiptapModule } from 'ngx-tiptap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TtTry1Component } from './tt-try1/tt-try1.component';

@NgModule({
  declarations: [
    AppComponent,
    TtTry1Component
  ],
  imports: [
    BrowserModule,NgxTiptapModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
