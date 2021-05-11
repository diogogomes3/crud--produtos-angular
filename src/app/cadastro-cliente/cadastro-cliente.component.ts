import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {
  public formClient: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formClient = this.formBuilder.group({
      nome: [""],
      email: [""],
      cpf: [""],
      endereco: [""],
      telefone: [""],
      senha: [""]
    })
  }

  ngOnInit(): void {
  }

  cadastrar() {
    console.log(this.formClient)
  }
}
