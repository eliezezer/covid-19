import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteLoginComponent } from './componente-login/componente-login.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteLoginComponent,
    BarraNavegacionComponent,
    ListaPersonasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
