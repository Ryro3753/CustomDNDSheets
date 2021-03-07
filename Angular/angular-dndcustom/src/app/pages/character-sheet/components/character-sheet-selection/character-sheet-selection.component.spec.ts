import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetSelectionComponent } from './character-sheet-selection.component';

describe('CharacterSheetSelectionComponent', () => {
  let component: CharacterSheetSelectionComponent;
  let fixture: ComponentFixture<CharacterSheetSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
