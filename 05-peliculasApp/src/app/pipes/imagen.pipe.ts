import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = environment.imgUrl;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string='w500'): string {
    
    if(!img){
      return './assets/no-image-banner.jpg';
    }
    const img_url= `${url}/${size}${img}`;

    return img_url;
  }

}
