import { Pelicula } from './../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  slideOpts2={
    slidesPerView: 1.2,
    freeMode: true
  }

  @Input() peliculasRecientes: Pelicula[]= [];

  constructor() { }

  ngOnInit() {}

}
