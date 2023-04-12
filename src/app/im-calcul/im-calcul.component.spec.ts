import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcCalculatorComponent } from './im-calcul.component';

describe('ImCalculComponent', () => {
  let component: ImcCalculatorComponent;
  let fixture: ComponentFixture<ImcCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImcCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
