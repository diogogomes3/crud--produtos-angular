import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormulariClienteComponent } from './formulario-cliente/formulari-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulariClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
