import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReactiveFormComponent } from './client-reactive-form.component';

describe('ClientReactiveFormComponent', () => {
  let component: ClientReactiveFormComponent;
  let fixture: ComponentFixture<ClientReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReactiveFormComponent ]
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
