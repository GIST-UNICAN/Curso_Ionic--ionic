import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any, 
            texto_filtro: string,
            columna_filtro: string): any {
    texto_filtro =texto_filtro.toLowerCase();
    if(texto_filtro==""){
      return arreglo;
    }
    else{
      return arreglo.filter(item=>{
        return item[columna_filtro].toLowerCase().includes(texto_filtro);
      })
    }

  }

}
