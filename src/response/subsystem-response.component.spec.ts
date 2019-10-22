import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsystemResponseComponent } from './subsystem-response.component';

describe('SubsystemResponseComponent', () => {
  let component: SubsystemResponseComponent;
  let fixture: ComponentFixture<SubsystemResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsystemResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsystemResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
