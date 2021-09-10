import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePassword'
})
export class HidePasswordPipe implements PipeTransform {

  transform(value: string): string {

    let hidePassword = "";

    for (let index = 0; index < value.length; index++) {
      hidePassword += '*';

    }
    return hidePassword;
  }

}
