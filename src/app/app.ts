import { Component } from '@angular/core';
import { BodegaForm } from './components/bodega-form/bodega-form';
import { ProductosTabla } from './components/productos-tabla/productos-tabla';

@Component({
  imports: [BodegaForm, ProductosTabla],
  selector: 'app-root',
  styles: [],
  template: `
    <h1>Bodegas</h1>
    <app-bodega-form (registrada)="tabla.cargar()" />
    <app-productos-tabla #tabla />
  `,
})
export class App {}
