import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoCreaeditaComponent } from './banco-creaedita.component';

describe('BancoCreaeditaComponent', () => {
  let component: BancoCreaeditaComponent;
  let fixture: ComponentFixture<BancoCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancoCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BancoCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
