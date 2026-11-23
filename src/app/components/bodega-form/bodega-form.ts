import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BodegaService } from '../../services/bodega.service';

@Component({
  imports: [FormsModule],
  selector: 'app-bodega-form',
  styles: ``,
  template: `
    <h2>Registrar bodega</h2>
    <form (ngSubmit)="registrar()">
      <label>
        Nombre
        <input name="nombre" [(ngModel)]="nombre" required />
      </label>
      <label>
        Ubicación
        <input name="ubicacion" [(ngModel)]="ubicacion" required />
      </label>
      <button type="submit" [disabled]="!nombre || !ubicacion">Registrar</button>
    </form>
    <p>{{ mensaje() }}</p>
  `,
})
export class BodegaForm {
  private bodegaService = inject(BodegaService);

  nombre = '';
  ubicacion = '';
  mensaje = signal('');
  registrada = output<void>();

  registrar() {
    this.bodegaService.registrar({ nombre: this.nombre, ubicacion: this.ubicacion }).subscribe((bodega) => {
      this.mensaje.set(`Bodega "${bodega.nombre}" registrada`);
      this.nombre = '';
      this.ubicacion = '';
      this.registrada.emit();
    });
  }
}
