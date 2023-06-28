import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTaskComponent } from './done-task.component';

describe('DoneTaskComponent', () => {
  let component: DoneTaskComponent;
  let fixture: ComponentFixture<DoneTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoneTaskComponent]
    });
    fixture = TestBed.createComponent(DoneTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
