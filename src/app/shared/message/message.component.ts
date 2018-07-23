import {Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  public texte = 'valeur par défaut...';

  @Output()
  public texteChange = new EventEmitter<string>();

  @Output()
  public tropLong = new EventEmitter<void>();

  constructor() { }

  saisie() {
    this.texte += ' clic';
    if (this.texte.length > 40) {
      this.tropLong.emit();
    }
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('ngOnChange...');
    console.log(this.texte.length);
    if (this.texte.length > 40) {
      this.tropLong.emit();
    }
  }

  ngDoCheck(){
    console.log('ngDoCheck...');
  }
}
