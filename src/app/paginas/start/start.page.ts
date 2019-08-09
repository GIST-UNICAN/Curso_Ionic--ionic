import { Component, OnInit } from '@angular/core';
import { DownloadService } from 'src/app/services/download.service';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  elementos: Observable<Componente[]>;
  
  constructor(private obtenerMenu: DownloadService) { }

  ngOnInit() {
    this.elementos = this.obtenerMenu.getMenu();

  }

}

