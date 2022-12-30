import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTableTbodyComponent } from './full-table-tbody.component';

describe('FullTableTbodyComponent', () => {
  let component: FullTableTbodyComponent;
  let fixture: ComponentFixture<FullTableTbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullTableTbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTableTbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
