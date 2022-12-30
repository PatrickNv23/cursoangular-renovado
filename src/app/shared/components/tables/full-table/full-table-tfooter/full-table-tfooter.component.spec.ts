import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTableTfooterComponent } from './full-table-tfooter.component';

describe('FullTableTfooterComponent', () => {
  let component: FullTableTfooterComponent;
  let fixture: ComponentFixture<FullTableTfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullTableTfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTableTfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
