import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSupComponent } from './info-sup.component';

describe('InfoSupComponent', () => {
  let component: InfoSupComponent;
  let fixture: ComponentFixture<InfoSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
