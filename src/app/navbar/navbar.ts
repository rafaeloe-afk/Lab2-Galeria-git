import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosService } from '../servicios/datos.service';
import { categoria } from '../modelos/categoria';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html', 
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {
  categorias: categoria[] = [];
  categoriaActual: number | null = 0;
  @Output() categoriaSeleccionada = new EventEmitter<number>();

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.datosService.obtenerCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  seleccionarCategoria(id: number): void {
    this.categoriaActual = id;
    this.categoriaSeleccionada.emit(id);
  }
}