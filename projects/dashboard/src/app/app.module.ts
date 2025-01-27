import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BscTableModule } from 'bsc-table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BscTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
