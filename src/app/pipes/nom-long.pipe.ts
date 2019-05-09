import { Pipe, PipeTransform } from '@angular/core';
import {Client} from '../model/client';
import {TitleCasePipe} from '@angular/common';

@Pipe({
  name: 'nomlong'
})
export class NomLongPipe implements PipeTransform {
  private titleCase = new TitleCasePipe();

  // constructor(private titleCase: TitleCasePipe){} // erreur !!!


  transform(cli: Client): string {
    const prenom = this.titleCase.transform(cli.prenom);
    return `${prenom} ${cli.nom.toUpperCase()}`;
  }

}
