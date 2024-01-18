import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { IngresoComponent } from './ingreso/ingreso.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    IngresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
