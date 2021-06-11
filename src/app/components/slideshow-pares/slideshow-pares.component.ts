import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input () poster: Pelicula[] = [];
  @Output () cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 2.6,
    freeMode : true,
    spaceBetween: -10
  };

  constructor() { }

  ngOnInit() {}

  clickOn() {
    this.cargarMas.emit();
    
  }

}
