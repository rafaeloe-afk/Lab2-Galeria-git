import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Galeria } from './galeria/galeria';
import { NavbarComponent } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, Galeria],
  templateUrl: './app.html',
  styleUrls: ['./app.css']    
  
})
export class AppComponent  {
  @ViewChild('galeria') galeria!: Galeria; 
}
