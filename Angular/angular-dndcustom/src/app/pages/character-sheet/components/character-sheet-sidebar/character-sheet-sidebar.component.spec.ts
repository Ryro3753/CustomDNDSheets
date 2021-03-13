import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetSidebarComponent } from './character-sheet-sidebar.component';

describe('CharacterSheetSidebarComponent', () => {
  let component: CharacterSheetSidebarComponent;
  let fixture: ComponentFixture<CharacterSheetSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
