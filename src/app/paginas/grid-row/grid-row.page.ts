import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-row',
  templateUrl: './grid-row.page.html',
  styleUrls: ['./grid-row.page.scss'],
})
export class GridRowPage implements OnInit {
  data=Array(10)
  constructor() { }

  ngOnInit() {
  }

}
