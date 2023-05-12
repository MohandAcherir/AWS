import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousArticle6Component } from './sous-article6.component';

describe('SousArticle6Component', () => {
  let component: SousArticle6Component;
  let fixture: ComponentFixture<SousArticle6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousArticle6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousArticle6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
