import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUsermenuComponent } from './app-usermenu.component';

describe('AppUsermenuComponent', () => {
  let component: AppUsermenuComponent;
  let fixture: ComponentFixture<AppUsermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUsermenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUsermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
