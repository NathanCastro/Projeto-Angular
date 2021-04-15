import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiretivasComponent } from './diretivas.component';

describe('DiretivasComponent', () => {
  let component: DiretivasComponent;
  let fixture: ComponentFixture<DiretivasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
