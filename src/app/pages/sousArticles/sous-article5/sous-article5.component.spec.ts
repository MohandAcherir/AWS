import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousArticle5Component } from './sous-article5.component';

describe('SousArticle5Component', () => {
  let component: SousArticle5Component;
  let fixture: ComponentFixture<SousArticle5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousArticle5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousArticle5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
