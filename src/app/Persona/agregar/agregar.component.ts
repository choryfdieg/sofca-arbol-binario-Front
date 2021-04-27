import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Cliente } from '../../Model/Cliente';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  mensaje: string;
  error: boolean;
  constructor(private router: Router, private service: ServiceService) {
    this.mensaje = '';
    this.error = false;
  }

  ngOnInit(): void {}

  cliente: Cliente = new Cliente();

  Guardar() {
    if (this.cliente.documento.trim() == '') {
      this.mensaje = 'Debe digitar el documento';
      this.error = true;
      return;
    }

    this.service.crearCliente(this.cliente).subscribe(data => {});
  }
}
