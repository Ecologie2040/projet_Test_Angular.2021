import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreArt'
})
export class NombreArtPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
