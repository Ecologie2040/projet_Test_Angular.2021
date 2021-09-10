import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pointVergule'
})
export class PointVergulePipe implements PipeTransform {

  transform(value: string): string {
  //  console.log('OLEKO',value)
      if(!!value) {
        return value.replace(/,/g, '.');
      }

  }


}
