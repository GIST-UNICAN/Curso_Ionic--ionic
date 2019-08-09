import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/componentes/popover/popover.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async lauchPopover(event){
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: event,
      translucent: true,
      backdropDismiss: false
    });
     await popover.present();
    const {data} = await popover.onWillDismiss()
    console.log("elemento pulsado", data.elemento)

  }
}
