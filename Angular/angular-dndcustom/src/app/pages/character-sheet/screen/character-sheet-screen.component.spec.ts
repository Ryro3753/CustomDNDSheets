import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetScreenComponent } from './character-sheet-screen.component';

describe('CharacterSheetScreenComponent', () => {
  let component: CharacterSheetScreenComponent;
  let fixture: ComponentFixture<CharacterSheetScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
