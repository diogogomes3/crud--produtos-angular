import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Routes} from '@angular/router';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.scss']
})
export class FormularioClienteComponent implements OnInit {
  public formClient: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formClient = this.formBuilder.group({})
  }

  ngOnInit(): void {
  }

}
