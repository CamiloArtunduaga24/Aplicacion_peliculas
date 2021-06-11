import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula, RespuestaMDB } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];

  populares: Pelicula [] = [];
  // slideOpts = {
  //   slidesPerView: 1.1,
  //   freeMode : true
  // };

  constructor( private movieServices: MoviesService ) {

  }

  ngOnInit() {
    this.movieServices.getCartelera()
      .subscribe( resp => {
      this.peliculasRecientes = resp.results;
    });
    this.getPopulares();
  }

  cargarMas(){
    this.getPopulares();
  }

  getPopulares() {
    this.movieServices.getPopular()
    .subscribe( resp => {
      const arregloTemporal = [ ...this.populares, ...resp.results ];
      this.populares = arregloTemporal;
   
    } )
  }

}
