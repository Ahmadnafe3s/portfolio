import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacMeComponent } from './contac-me.component';

describe('ContacMeComponent', () => {
  let component: ContacMeComponent;
  let fixture: ComponentFixture<ContacMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContacMeComponent]
    });
    fixture = TestBed.createComponent(ContacMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
