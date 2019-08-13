import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refrescador',
  templateUrl: './refrescador.page.html',
  styleUrls: ['./refrescador.page.scss'],
})
export class RefrescadorPage implements OnInit {

  data: any[] =[];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.data=Array(40);
      event.target.complete();
    }, 1000);
  }

}
