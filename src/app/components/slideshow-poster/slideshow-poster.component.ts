import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input () poster: Pelicula[] = [];


  slideOpts = {
    slidesPerView: 2.6,
    freeMode : true
  };

  constructor() { }

  ngOnInit() {}

}
