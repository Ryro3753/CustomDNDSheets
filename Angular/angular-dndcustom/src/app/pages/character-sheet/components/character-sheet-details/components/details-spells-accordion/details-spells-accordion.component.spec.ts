import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSpellsAccordionComponent } from './details-spells-accordion.component';

describe('DetailsSpellsAccordionComponent', () => {
  let component: DetailsSpellsAccordionComponent;
  let fixture: ComponentFixture<DetailsSpellsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSpellsAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSpellsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
