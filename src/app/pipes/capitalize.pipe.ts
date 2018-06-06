import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    return value
      .split('-')
      .map( prenom =>
        prenom.charAt(0).toUpperCase()
        + prenom.substring(1).toLowerCase()
      ).join('-');
  }

}
