import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reaorde',
  templateUrl: './list-reaorde.page.html',
  styleUrls: ['./list-reaorde.page.scss'],
})
export class ListReaordePage implements OnInit {

  personajes=['Aquaman', 'Superman', 'Batmab', 'America'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event){
    console.log(event)

    //const itemMover=this.personajes.splice(event.detail.from, 1)[0];
    //this.personajes.splice(event.detail.to, 0, itemMover)

    this.personajes=event.detail.complete(this.personajes)

  }
  onClick(){
    console.log(this.personajes)
  }
}
