import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  hoy: Date = new Date();
  constructor() { }

  ngOnInit() {
  }
  fechaCambio(event){
    console.log(event);
  }

}
