import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderTableComponent } from './order-table.component';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('OrderTableComponent', () => {
  let component: OrderTableComponent;
  let fixture: ComponentFixture<OrderTableComponent>;
  let de;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), RouterTestingModule],
      declarations: [OrderTableComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTableComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
  it(`should have an approve button`, () => {
    fixture.detectChanges();

    const elements = fixture.debugElement.queryAll(By.css('.approve'));
    expect(elements.length).toBeTruthy();
  });

  it(`should have a reject button`, () => {
    fixture.detectChanges();

    const elements = fixture.debugElement.queryAll(By.css('.reject'));
    expect(elements.length).toBeTruthy();
  });
});
