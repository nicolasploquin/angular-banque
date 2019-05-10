import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import {APP_DECLARATIONS, APP_IMPORTS} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';
import {MessageComponent} from '../shared/message/message.component';
import {FormsModule} from '@angular/forms';
import {NomLongPipe} from '../pipes/nom-long.pipe';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoComponent, MessageComponent, NomLongPipe],
      imports: [RouterTestingModule, FormsModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/fr/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
