import { Component } from '@angular/core';
import { ServicioBdService } from 'src/app/services/servicio-bd.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  productoActualizar: any = { codigo: null, nombre: '', descripcion: '', precio: null };
  actualizacionExitosa: boolean = false;

  constructor(private productoService: ServicioBdService) { }

  ngOnInit(): void {
    // Puedes implementar aquí la lógica para cargar los datos del producto a actualizar
  }

  actualizarProducto(): void {
    this.productoService.crear(this.productoActualizar).subscribe(
      response => {
        console.log('Producto creado', response);
        this.actualizacionExitosa = true;
      },
      error => {
        console.error('Error al crear el producto', error);
      }
    );
  }
}
