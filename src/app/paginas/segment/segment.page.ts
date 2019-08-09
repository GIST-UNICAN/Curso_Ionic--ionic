import { DownloadService } from 'src/app/services/download.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  publisher="";

  superheroes : Observable<any>;

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  constructor(private download: DownloadService) { }

  ngOnInit() {
    this.superheroes=this.download.getSuperheroes();
    this.segment.value="todos";
  }

  segmentChanged(event){
    const valor=event.detail.value;
    if (valor==="todos"){
      this.publisher="";
      return;
    }
    else{
      this.publisher=valor;
      return
    }


  }

}
