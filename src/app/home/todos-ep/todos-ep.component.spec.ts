import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosEpComponent } from './todos-ep.component';

describe('TodosEpComponent', () => {
  let component: TodosEpComponent;
  let fixture: ComponentFixture<TodosEpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosEpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
