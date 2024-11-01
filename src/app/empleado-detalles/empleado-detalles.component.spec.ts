import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDetallesComponent } from './empleado-detalles.component';

describe('EmpleadoDetallesComponent', () => {
  let component: EmpleadoDetallesComponent;
  let fixture: ComponentFixture<EmpleadoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpleadoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
