import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categoria } from '../modelos/categoria';
import { Foto } from '../modelos/foto';
import { Relacion } from '../modelos/relacion';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) {} // Inyección sigue igual

  obtenerCategorias(): Observable<categoria[]> {
    return this.http.get<categoria[]>('assets/categorias.json');
  }

  obtenerFotos(): Observable<Foto[]> {
    return this.http.get<Foto[]>('assets/fotos.json');
  }

  obtenerRelaciones(): Observable<Relacion[]> {
    return this.http.get<Relacion[]>('assets/relacion.json');
  }
}
