import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidButtonComponent } from './solid-button.component';

describe('SolidButtonComponent', () => {
  let component: SolidButtonComponent;
  let fixture: ComponentFixture<SolidButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});