import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellEditorModalComponent } from './spell-editor-modal.component';

describe('SpellEditorModalComponent', () => {
  let component: SpellEditorModalComponent;
  let fixture: ComponentFixture<SpellEditorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellEditorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
