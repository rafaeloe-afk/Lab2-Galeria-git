import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // necesario para *ngFor, *ngIf
import { FotoComponente } from '../fotoComponente/fotoComponente';
import { DatosService } from '../servicios/datos.service';
import { Foto } from '../modelos/foto';
import { Relacion } from '../modelos/relacion';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-galeria',
  standalone: true,           // 🔹 componente standalone
  imports: [CommonModule, FotoComponente],
  templateUrl: './galeria.html',
  styleUrls: ['./galeria.css']
})
export class Galeria implements OnInit {
  fotos: Foto[] = [];
  relaciones: Relacion[] = [];
  fotosFiltradas: Foto[] = [];
  categoriaActual: number = 0;
  lightboxAbierto: boolean = false;
  fotoSeleccionada: Foto | null = null;

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.datosService.obtenerFotos().subscribe(f => this.fotos = f);
    this.datosService.obtenerRelaciones().subscribe(r => this.relaciones = r);
    this.filtrarPorCategoria(this.categoriaActual);
  }

  filtrarPorCategoria(id: number): void {
    this.categoriaActual = id;
    if (id === 0) {
      this.fotosFiltradas = this.fotos;
      return;
    } else { 
      const idsFotos = this.relaciones
        .filter(r => r.idCategoria === id)
        .map(r => r.idFoto);
      this.fotosFiltradas = this.fotos.filter(f => idsFotos.includes(f.id));
    }
  }
  abrirLightbox(foto: Foto) {
    this.fotoSeleccionada = foto;
    this.lightboxAbierto = true;
  }

  cerrarLightbox() {
    this.fotoSeleccionada = null;
    this.lightboxAbierto = false;
  }


}