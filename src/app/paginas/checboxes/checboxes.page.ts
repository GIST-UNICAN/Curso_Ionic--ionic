import { Component, OnInit } from '@angular/core';
import { IonCheckbox } from '@ionic/angular';

@Component({
  selector: 'app-checboxes',
  templateUrl: './checboxes.page.html',
  styleUrls: ['./checboxes.page.scss'],
})
export class ChecboxesPage implements OnInit {

  public form = [
    { val: 'primary', isChecked: true },
    { val: 'secondary', isChecked: false },
    { val: 'tertiary', isChecked: false }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(check){
    console.log(check)
  }

  onChange (pep){
    console.log(pep.detail.checked)
  }

}
