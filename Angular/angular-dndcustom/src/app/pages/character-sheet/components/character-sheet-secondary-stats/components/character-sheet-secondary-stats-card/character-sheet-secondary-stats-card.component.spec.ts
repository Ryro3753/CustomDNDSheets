import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetSecondaryStatsCardComponent } from './character-sheet-secondary-stats-card.component';

describe('CharacterSheetSecondaryStatsCardComponent', () => {
  let component: CharacterSheetSecondaryStatsCardComponent;
  let fixture: ComponentFixture<CharacterSheetSecondaryStatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetSecondaryStatsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetSecondaryStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
