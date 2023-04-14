import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieCalculComponent } from './calorie-calcul.component';

describe('CalorieCalculComponent', () => {
  let component: CalorieCalculComponent;
  let fixture: ComponentFixture<CalorieCalculComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalorieCalculComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalorieCalculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
