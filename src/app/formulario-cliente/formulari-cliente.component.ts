export class Cliente {
  nome: string;
  rg: string;
  cpf: string;
  endereço: string;
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulari-cliente',
  templateUrl: './formulari-cliente.component.html',
  styleUrls: ['./formulari-cliente.component.scss']
})
export class FormulariClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
