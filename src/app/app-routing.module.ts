import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';

var rotas: Routes = [
  {
    path: "cadastro-cliente",
    component: CadastroClienteComponent
  },
  {
    path: "lista-cliente",
    component: ListaClienteComponent
  },
  {
    path: "formulario-cliente",
    component: FormularioClienteComponent
  },
  {
    path: "",
    redirectTo: "cadastro-cliente",
    pathMatch: "full"
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
