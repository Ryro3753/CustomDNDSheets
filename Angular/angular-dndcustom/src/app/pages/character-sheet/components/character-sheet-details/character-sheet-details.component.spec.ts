import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetDetailsComponent } from './character-sheet-details.component';

describe('CharacterSheetDetailsComponent', () => {
  let component: CharacterSheetDetailsComponent;
  let fixture: ComponentFixture<CharacterSheetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
