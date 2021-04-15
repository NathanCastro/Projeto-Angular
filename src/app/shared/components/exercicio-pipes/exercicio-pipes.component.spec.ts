import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExercicioPipesComponent } from './exercicio-pipes.component';

describe('ExercicioPipesComponent', () => {
  let component: ExercicioPipesComponent;
  let fixture: ComponentFixture<ExercicioPipesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
