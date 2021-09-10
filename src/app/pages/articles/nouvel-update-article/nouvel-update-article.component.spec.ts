import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelUpdateArticleComponent } from './nouvel-update-article.component';

describe('NouvelUpdateArticleComponent', () => {
  let component: NouvelUpdateArticleComponent;
  let fixture: ComponentFixture<NouvelUpdateArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelUpdateArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelUpdateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
