import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LwightComponent } from './lweight.component';

describe('LweightComponent', () => {
  let component: LweightComponent;
  let fixture: ComponentFixture<LweightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LweightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
