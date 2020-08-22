import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BscTableComponent } from './bsc-table.component';

describe('BscTableComponent', () => {
  let component: BscTableComponent;
  let fixture: ComponentFixture<BscTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BscTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BscTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
