import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  slideOpts2={
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween:-20
  }

  @Input() peliculas: Pelicula[]= [];

  constructor() { }

  ngOnInit() {}

}
