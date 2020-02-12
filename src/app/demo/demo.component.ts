import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Client} from '../model/client';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @ViewChild('monElem', { static: true })
  public monElem: ElementRef;

  public nom: string = 'test';

  public client: Client = new Client();

  constructor(private renderer: Renderer2) { }

  effacer(){
    this.nom = '';
  }

  ngOnInit() {
    console.dir(this.renderer);
    this.monElem.nativeElement.style.color = "blue";
    this.renderer.setStyle(
      this.monElem.nativeElement,
      'text-decoration',
      'underline'
    );
    this.renderer.setProperty(
      this.monElem.nativeElement,
      'innerHTML',
      'nouveau contenu <strong>dynamique</strong>... c\'est cool !'
    );


    this.client.nom = 'Leblanc';
    this.client.prenom = 'Jean-Marc';

  }

}
