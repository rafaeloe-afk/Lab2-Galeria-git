import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Foto } from '../modelos/foto';

@Component({
  selector: 'app-foto',
  templateUrl: './fotoComponente.html',
  styleUrls: ['./fotoComponente.css']
})
export class FotoComponente {
  @Input() foto!: Foto;
  @Output() fotoClick= new EventEmitter<Foto>();

  onClick() {
    this.fotoClick.emit(this.foto);
  }
}