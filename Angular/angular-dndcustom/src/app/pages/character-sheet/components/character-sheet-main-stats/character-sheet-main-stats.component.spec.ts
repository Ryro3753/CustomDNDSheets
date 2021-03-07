import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetMainStatsComponent } from './character-sheet-main-stats.component';

describe('CharacterSheetMainStatsComponent', () => {
  let component: CharacterSheetMainStatsComponent;
  let fixture: ComponentFixture<CharacterSheetMainStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetMainStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetMainStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
