import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzarankComponent } from './pizzarank.component';

describe('PizzarankComponent', () => {
  let component: PizzarankComponent;
  let fixture: ComponentFixture<PizzarankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzarankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzarankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
