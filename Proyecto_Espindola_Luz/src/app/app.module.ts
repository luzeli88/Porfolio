import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteModule } from './componente/componente.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent 
       ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponenteModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({}), 
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
