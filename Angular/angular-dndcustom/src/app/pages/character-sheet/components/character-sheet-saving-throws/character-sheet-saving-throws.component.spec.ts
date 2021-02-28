import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetSavingThrowsComponent } from './character-sheet-saving-throws.component';

describe('CharacterSheetSavingThrowsComponent', () => {
  let component: CharacterSheetSavingThrowsComponent;
  let fixture: ComponentFixture<CharacterSheetSavingThrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetSavingThrowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetSavingThrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
