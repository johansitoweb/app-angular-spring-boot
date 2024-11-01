import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-detalles',
  standalone: true,
  imports: [],
  templateUrl: './empleado-detalles.component.html',
  styleUrl: './empleado-detalles.component.css'
})
export class EmpleadoDetallesComponent {

  id: number;
  empleado: Empleado;
  constructor(private route: ActivatedRoute, private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      Swal.fire(`Detalles del empleado ${this.empleado.nombre}`);
    });
  }

}
