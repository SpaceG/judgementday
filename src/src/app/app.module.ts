
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbdCarouselBasic } from './carousel-basic';

@NgModule({
  imports: [BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, NgbModule.forRoot()], 
  declarations: [
    AppComponent, 
    NgbdCarouselBasic
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule {}
