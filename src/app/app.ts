import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Galeria } from './galeria/galeria';
import { NavbarComponent } from './navbar/navbar';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, NavbarComponent, Galeria, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']    
  
})
export class AppComponent  {
  
  @ViewChild('galeria') galeria!: Galeria; 
  
}
