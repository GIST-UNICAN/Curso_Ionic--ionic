import { DownloadService } from 'src/app/services/download.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  elementos_menu: Observable<Componente[]>;

  constructor(private menuDownload: DownloadService) { }

  ngOnInit() {
    this.elementos_menu= this.menuDownload.getMenu()
  }

}
