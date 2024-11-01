import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEmpleadoComponent } from './actualizar-empleado.component';

describe('ActualizarEmpleadoComponent', () => {
  let component: ActualizarEmpleadoComponent;
  let fixture: ComponentFixture<ActualizarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarEmpleadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
