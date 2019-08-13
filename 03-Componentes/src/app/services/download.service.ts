import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import {delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
      }

  getMenu(){
    return this.http.get<Componente[]>('/assets/data/menu.json');  
  }

  getAlbum(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');  
  }

  getSuperheroes(){
    return this.http.get<any[]>('/assets/data/superheroes.json').pipe(
      delay(2500)
    );
  }
  
}
