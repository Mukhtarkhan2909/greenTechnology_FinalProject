import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsFutureComponent } from './its-future.component';

describe('ItsFutureComponent', () => {
  let component: ItsFutureComponent;
  let fixture: ComponentFixture<ItsFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItsFutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItsFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
