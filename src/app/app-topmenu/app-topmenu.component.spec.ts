import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTopmenuComponent } from './app-topmenu.component';

describe('AppTopmenuComponent', () => {
  let component: AppTopmenuComponent;
  let fixture: ComponentFixture<AppTopmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTopmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTopmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
