import { Component, OnInit, ViewChild } from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular'

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data=Array(20)

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    setTimeout(() => {
      const add_arr=Array(20)
      console.log('Done');
      this.data.push(...add_arr)
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length > 50) {
        console.log('disabled')
        event.target.disabled = true;
        //this.infiniteScroll.disabled=true;
      }
    }, 500);


  }

}
