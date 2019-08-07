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
 },
 {
   icon: 'person',
   nombre: 'Avatar',
   ruta: '/avatar'
  },
  {
    icon: 'radio-button-on',
    nombre: 'Botones',
    ruta: '/botones'
   },
   {
     icon: 'card',
     nombre: 'Cards',
     ruta: '/cards'
    },
    {
      icon: 'list',
      nombre: 'Chechboxes',
      ruta: '/checboxes'
     },
     {
       icon: 'calendar',
       nombre: 'Calendario',
       ruta: '/calendar'
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