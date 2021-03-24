import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {
  public listaProdutos: Array<{nome: string, valor: string}> = [];


  constructor() { }

  ngOnInit(): void {
  }

  addProduto() {}
}
