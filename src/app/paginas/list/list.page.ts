import { DownloadService } from './../../services/download.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild ('list',  {static: false}) lista: IonList;
  data: Observable<any>; 
  constructor(private download: DownloadService) { }

  ngOnInit() {
    this.data = this.download.getUsers();
  }

  favorite(item){
    console.log('Favorite', item)
    this.lista.closeSlidingItems();
  }
  share(item){
    console.log('Share', item)
    this.lista.closeSlidingItems();
  }
  borrar(item){
    console.log('Borrar', item)
    this.lista.closeSlidingItems();

  }

}
