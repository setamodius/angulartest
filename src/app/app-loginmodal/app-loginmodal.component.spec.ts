import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoginmodalComponent } from './app-loginmodal.component';

describe('AppLoginmodalComponent', () => {
  let component: AppLoginmodalComponent;
  let fixture: ComponentFixture<AppLoginmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLoginmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoginmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
