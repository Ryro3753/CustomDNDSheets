import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEditorModalComponent } from './equipment-editor-modal.component';

describe('EquipmentEditorModalComponent', () => {
  let component: EquipmentEditorModalComponent;
  let fixture: ComponentFixture<EquipmentEditorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentEditorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
