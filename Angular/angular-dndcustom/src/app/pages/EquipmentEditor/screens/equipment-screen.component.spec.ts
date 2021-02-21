import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentScreenComponent } from './equipment-screen.component';

describe('EquipmentScreenComponent', () => {
  let component: EquipmentScreenComponent;
  let fixture: ComponentFixture<EquipmentScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
