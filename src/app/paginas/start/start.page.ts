import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  elementos: Componente[]=[
{
 icon: 'american-football',
 nombre: 'alert',
 ruta: '/alert'
},
{
  icon: 'appstore',
  nombre: 'Sheet Detail',
  ruta: '/action-sheet'
 }

  ]
  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
icon: string,
nombre: string,
ruta: string

}