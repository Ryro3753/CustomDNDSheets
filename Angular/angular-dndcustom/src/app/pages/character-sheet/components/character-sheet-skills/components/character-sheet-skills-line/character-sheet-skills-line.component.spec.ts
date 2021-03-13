import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetSkillsLineComponent } from './character-sheet-skills-line.component';

describe('CharacterSheetSkillsLineComponent', () => {
  let component: CharacterSheetSkillsLineComponent;
  let fixture: ComponentFixture<CharacterSheetSkillsLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetSkillsLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetSkillsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
