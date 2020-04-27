import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteLoginComponent } from './componente-login/componente-login.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';

import {RouterModule, Routes} from '@angular/router';

const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Home'
  },
  {
    path: 'Home',
    component: ComponenteLoginComponent
  },
  {
    path: 'Personas',
    component: ListaPersonasComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ComponenteLoginComponent,
    BarraNavegacionComponent,
    ListaPersonasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas, {
      enableTracing: true,
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
