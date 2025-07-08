import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskByIdComponent } from './task-by-id.component';

describe('TaskByIdComponent', () => {
  let component: TaskByIdComponent;
  let fixture: ComponentFixture<TaskByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskByIdComponent]
    });
    fixture = TestBed.createComponent(TaskByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
