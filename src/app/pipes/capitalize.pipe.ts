import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    return value
      .toLowerCase()
      .split('-')
      .map( prenom =>
        prenom.charAt(0).toUpperCase()
        + prenom.substring(1)
      ).join('-');
  }

}
