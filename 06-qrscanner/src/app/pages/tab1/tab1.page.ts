import { DataLocalService } from './../../services/data-local.service';
import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  swiperOpts={
    allowSlidePrev: false,
    allowSlideNext: false
  }

  constructor(private barcodeScanner: BarcodeScanner,
              private dataLocal: DataLocalService) {}

  ionViewDidEnter(){
   //console.log('viewdidenter')
   
  }

  ionViewDidLeave(){
    //console.log('viewdidleave')
  }

  ionViewWillEnter(){
    //console.log('viewwill enter')
    //this.scan()
  }

  ionViewWillLeave(){
    //console.log('viewwillleave')
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if(!barcodeData.cancelled){
        this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text)
      }
     }).catch(err => {
         console.log('Error', err);
         //this.dataLocal.guardarRegistro('QRCode', 'https://marca.com')
         this.dataLocal.guardarRegistro('QRCode', 'geo:40.7345258,-74.06524554')
     });

  }


}
