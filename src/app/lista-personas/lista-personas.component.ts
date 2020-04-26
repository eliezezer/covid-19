import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  personas: string [];
  constructor() {

    this.personas = ['Juan Perez Caceres', 'Camilo Aranjuez','Bacilio Armandito', 'Pedro Pablo Kuchcynski', 
    'Keiko Yukimori', 'Alan Garcia', 'Martin Vizcarra', 'Choledo mas trago'];
   }
    
  ngOnInit(): void {
  }

}
