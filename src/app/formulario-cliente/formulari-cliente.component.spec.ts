import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariClienteComponent } from './formulari-cliente.component';

describe('FormulariClienteComponent', () => {
  let component: FormulariClienteComponent;
  let fixture: ComponentFixture<FormulariClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
