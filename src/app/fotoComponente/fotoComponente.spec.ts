import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoComponente } from './fotoComponente';

describe('Foto', () => {
  let component: FotoComponente;
  let fixture: ComponentFixture<FotoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotoComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
