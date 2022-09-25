import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoBuscarComponent } from './banco-buscar.component';

describe('BancoBuscarComponent', () => {
  let component: BancoBuscarComponent;
  let fixture: ComponentFixture<BancoBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancoBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BancoBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
