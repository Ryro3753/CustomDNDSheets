import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBackgroundAccordionComponent } from './details-background-accordion.component';

describe('DetailsBackgroundAccordionComponent', () => {
  let component: DetailsBackgroundAccordionComponent;
  let fixture: ComponentFixture<DetailsBackgroundAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBackgroundAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBackgroundAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
