import { Component, OnInit, inject, signal } from '@angular/core';
import { Bodega } from '../../models/bodega';
import { BodegaService } from '../../services/bodega.service';

@Component({
  imports: [],
  selector: 'app-productos-tabla',
  styles: ``,
  template: `
    <h2>Productos</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Bodega</th>
        </tr>
      </thead>
      <tbody>
        @for (bodega of bodegas(); track bodega.id) {
          @for (producto of bodega.productos ?? []; track producto.id) {
            <tr>
              <td>{{ producto.nombre }}</td>
              <td>{{ producto.precio }}</td>
              <td>{{ producto.cantidad }}</td>
              <td>{{ bodega.nombre }}</td>
            </tr>
          }
        }
      </tbody>
    </table>
  `,
})
export class ProductosTabla implements OnInit {
  private bodegaService = inject(BodegaService);

  bodegas = signal<Bodega[]>([]);

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.bodegaService.listar().subscribe((bodegas) => this.bodegas.set(bodegas));
  }
}
