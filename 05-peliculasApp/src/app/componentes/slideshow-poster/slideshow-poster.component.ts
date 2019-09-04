import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  slideOpts2={
    slidesPerView: 3.3,
    freeMode: true
  }

  @Input() peliculasRecientes: Pelicula[]= [];

  constructor() { }

  ngOnInit() {}

}
