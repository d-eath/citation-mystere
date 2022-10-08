import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteInputComponent } from './quote-input.component';

describe('QuoteFieldComponent', () => {
  let component: QuoteInputComponent;
  let fixture: ComponentFixture<QuoteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
