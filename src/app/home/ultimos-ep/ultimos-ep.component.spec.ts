import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosEpComponent } from './ultimos-ep.component';

describe('UltimosEpComponent', () => {
  let component: UltimosEpComponent;
  let fixture: ComponentFixture<UltimosEpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimosEpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimosEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
