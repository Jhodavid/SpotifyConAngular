import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudeBarComponent } from './sude-bar.component';

describe('SudeBarComponent', () => {
  let component: SudeBarComponent;
  let fixture: ComponentFixture<SudeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudeBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SudeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
