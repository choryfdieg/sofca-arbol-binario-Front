import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Cliente } from '../../Model/Cliente';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  cliente: Cliente = new Cliente();
  titulo:String;
  mensaje: string;
  error: boolean;

  constructor(private service: ServiceService) {
    this.titulo = '';
    this.mensaje = '';
    this.error = false;
  }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {

    let documento = localStorage.getItem('documento') ?? '' ;

    this.service.getClienteByDocumento(documento).subscribe(data => {
      this.cliente = data;
      this.titulo = this.cliente.nombre;
    });
  }

  Actualizar(){

    this.service.actualizarCliente(this.cliente).subscribe(data => {
      this.mensaje = 'Datos almacenados correctamente';
      this.error = false;
    })

  }
}
