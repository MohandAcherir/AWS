import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousArticle3Component } from './sous-article3.component';

describe('SousArticle3Component', () => {
  let component: SousArticle3Component;
  let fixture: ComponentFixture<SousArticle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousArticle3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousArticle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
