import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LojaComponent } from './loja/loja.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LojaComponent,
    SobreNosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
