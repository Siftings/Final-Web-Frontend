import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bodega } from '../models/bodega';

@Injectable({ providedIn: 'root' })
export class BodegaService {
  private http = inject(HttpClient);
  private url = 'http://localhost:8080/bodegas';

  listar(): Observable<Bodega[]> {
    return this.http.get<Bodega[]>(this.url);
  }

  registrar(bodega: Bodega): Observable<Bodega> {
    return this.http.post<Bodega>(this.url, bodega);
  }
}
