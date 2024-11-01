import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { catchError, tap, throwError } from 'rxjs';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-empleado',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css'
})
export class RegistrarEmpleadoComponent {

  empleado: Empleado = new Empleado();
  constructor(private empleadoServicio: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).pipe(
      tap(dato => {
        console.log(dato);
        this.irALaListaDeEmpleados();
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => new Error(error));
      })
    ).subscribe();
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
    Swal.fire('Empleado registrado', `El empleado ${this.empleado.nombre} ha sido registrado con exito`, `success`);
  }

  onSubmit() {
    this.guardarEmpleado();
  }

}
