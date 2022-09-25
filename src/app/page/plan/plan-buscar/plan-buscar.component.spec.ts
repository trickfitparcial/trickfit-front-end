import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanBuscarComponent } from './plan-buscar.component';

describe('PlanBuscarComponent', () => {
  let component: PlanBuscarComponent;
  let fixture: ComponentFixture<PlanBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
