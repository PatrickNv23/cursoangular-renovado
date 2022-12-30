import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTableTheadComponent } from './full-table-thead.component';

describe('FullTableTheadComponent', () => {
  let component: FullTableTheadComponent;
  let fixture: ComponentFixture<FullTableTheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullTableTheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTableTheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
