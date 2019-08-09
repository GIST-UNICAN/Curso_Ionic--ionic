import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  collection=Array(30);

  constructor(private popCtrt: PopoverController) { }

  ngOnInit() {}

  onClick(elemento: number){
    this.popCtrt.dismiss({"elemento": elemento})

  }

}
