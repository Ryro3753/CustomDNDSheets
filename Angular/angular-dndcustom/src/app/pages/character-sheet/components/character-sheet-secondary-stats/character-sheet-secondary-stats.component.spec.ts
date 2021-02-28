import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetSecondaryStatsComponent } from './character-sheet-secondary-stats.component';

describe('CharacterSheetSecondaryStatsComponent', () => {
  let component: CharacterSheetSecondaryStatsComponent;
  let fixture: ComponentFixture<CharacterSheetSecondaryStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetSecondaryStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetSecondaryStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
