import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEditorTableComponent } from './equipment-editor-table.component';

describe('EquipmentEditorTableComponent', () => {
  let component: EquipmentEditorTableComponent;
  let fixture: ComponentFixture<EquipmentEditorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentEditorTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentEditorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
