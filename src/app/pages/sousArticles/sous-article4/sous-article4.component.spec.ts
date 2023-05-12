import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousArticle4Component } from './sous-article4.component';

describe('SousArticle4Component', () => {
  let component: SousArticle4Component;
  let fixture: ComponentFixture<SousArticle4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousArticle4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousArticle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
