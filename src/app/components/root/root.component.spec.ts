import { TestBed, async } from '@angular/core/testing';
import { RootComponent } from './root.component';
import {APP_DECLARATIONS, APP_IMPORTS, APP_PROVIDERS, AppModule} from '../../app.module';
import {APP_BASE_HREF} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';

describe('RootComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
      declarations: APP_DECLARATIONS,
      imports : [...APP_IMPORTS,RouterTestingModule],
      providers: [...APP_PROVIDERS,{provide: APP_BASE_HREF, useValue: '/fr/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(RootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
