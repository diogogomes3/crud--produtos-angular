export class Pessoa {
  nome: string;
  rg: string;
  cpf: string;
  endereço: string;
}
import { Component } from '@angular/core';
import {Pessoa} from './models/pessoa';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent {
pessoa: Pessoa;
//sempre que for trabalhar com variavel sempre colocar a tipagem tipo (var uwu: string;) ou (var owo: number;) e (var owu: any;)
constructor() {
  this.pessoa = new Pessoa();
 // var pessoa2 = {
   // nome:'',
   // telefone:''
  //}
  console.log('intanciaçao do objeto pessoa:', this.pessoa)
  this.pessoa.nome = 'diogo';
  this.pessoa.rg = '23523434235352';
  this.pessoa.cpf = '3465766';
  console.log('intanciaçao do objeto pessoa:', this.pessoa)
}
}
