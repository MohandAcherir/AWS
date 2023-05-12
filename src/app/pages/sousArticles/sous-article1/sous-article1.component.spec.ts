import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousArticle1Component } from './sous-article1.component';

describe('SousArticle1Component', () => {
  let component: SousArticle1Component;
  let fixture: ComponentFixture<SousArticle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousArticle1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousArticle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
