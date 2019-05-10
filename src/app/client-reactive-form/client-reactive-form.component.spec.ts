import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReactiveFormComponent } from './client-reactive-form.component';
import {APP_DECLARATIONS, APP_IMPORTS, APP_PROVIDERS} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';

describe('ClientReactiveFormComponent', () => {
  let component: ClientReactiveFormComponent;
  let fixture: ComponentFixture<ClientReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: APP_DECLARATIONS,
      imports : [...APP_IMPORTS,RouterTestingModule],
      providers: [...APP_PROVIDERS,{provide: APP_BASE_HREF, useValue: '/fr/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
