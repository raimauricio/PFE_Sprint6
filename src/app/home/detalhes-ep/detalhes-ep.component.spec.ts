import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEpComponent } from './detalhes-ep.component';

describe('DetalhesEpComponent', () => {
  let component: DetalhesEpComponent;
  let fixture: ComponentFixture<DetalhesEpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesEpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
