import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousArticle2Component } from './sous-article2.component';

describe('SousArticle2Component', () => {
  let component: SousArticle2Component;
  let fixture: ComponentFixture<SousArticle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousArticle2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousArticle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
