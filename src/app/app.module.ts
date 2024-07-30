import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, DecimalPipe],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
