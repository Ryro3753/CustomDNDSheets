import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellEditorTableComponent } from './spell-editor-table.component';

describe('SpellEditorTableComponent', () => {
  let component: SpellEditorTableComponent;
  let fixture: ComponentFixture<SpellEditorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellEditorTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellEditorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
