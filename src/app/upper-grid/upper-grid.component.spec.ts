import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperGridComponent } from './upper-grid.component';

describe('UpperGridComponent', () => {
  let component: UpperGridComponent;
  let fixture: ComponentFixture<UpperGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
