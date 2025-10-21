import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
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
  categoriaActual: number = 0;
  @Output() categoriaSeleccionada = new EventEmitter<number>();

  constructor(private datosService: DatosService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.datosService.obtenerCategorias().subscribe({
    next: (data) => {
      this.categorias = data;      
      this.cdr.detectChanges(); 
      this.categoriaSeleccionada.emit(0);
    },
    error: (err) => {
      console.error('Error cargando categorias.json:', err);
    }
  });

   
  }

  seleccionarCategoria(id: number): void {
    this.categoriaActual = id;
    this.categoriaSeleccionada.emit(id); 
  }
}