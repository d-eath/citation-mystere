import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerGridComponent } from './lower-grid.component';

describe('LowerGridComponent', () => {
  let component: LowerGridComponent;
  let fixture: ComponentFixture<LowerGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
