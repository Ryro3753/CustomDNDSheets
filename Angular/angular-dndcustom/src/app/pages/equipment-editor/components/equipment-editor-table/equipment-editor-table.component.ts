import { Component, OnInit, ViewChild } from '@angular/core';
import { Equipment } from 'src/app/models/equipment/equipment.model';
import { IconService } from 'src/app/services/common-services/icon.service';
import { EquipmentService } from 'src/app/services/equipment-services/equipment.service';
import { EquipmentEditorModalComponent } from '../equipment-editor-modal/equipment-editor-modal.component';

@Component({
  selector: 'app-equipment-editor-table',
  templateUrl: './equipment-editor-table.component.html',
  styleUrls: ['./equipment-editor-table.component.css']
})
export class EquipmentEditorTableComponent implements OnInit {

  Equipment: Equipment;
  @ViewChild('equipmentModal') equipmentModal: EquipmentEditorModalComponent;
  constructor(
    readonly service: EquipmentService,
    readonly iconService: IconService,
  ) {

  }
  gridDataSource: Equipment[];

  public iconPath: string;
  public placeOverIconPath: string;

  async ngOnInit() {
    this.placeOverIconPath = IconService.getPlaceOverIcon(1);
    this.iconPath = IconService.getImagesPath(1);
    this.gridDataSource = await this.service.getEquipments();

  }
  itemDoubleClick(equipment) {
    this.equipmentModal.EquipmentModal = true;
    this.equipmentModal.Equipment = equipment;
  }

  createButtonClicked(e) {
    this.equipmentModal.Equipment = { ref: 0 } as Equipment;
    this.equipmentModal.EquipmentModal = true;

  }

  deleteButtonClicked(e) {
    this.service.deleteEquipment(e.ref);
    this.gridDataSource = this.gridDataSource.filter(i => i.ref !== e.ref);
  }

  async emittedEquipment(e) {
    if (this.gridDataSource.filter(i => i.ref == e.ref).length == 0) {
      const ref = await this.service.insertOrUpdateEquipment(e);
      e.ref = ref;
      this.equipmentModal.Equipment.ref = ref;
      this.gridDataSource.push(e);
    }
    else {
      await this.service.insertOrUpdateEquipment(e)
    }
  }

  async emittedUploadIcon(e) {
    await this.iconService.uploadIcon(e.files[0], this.equipmentModal.Equipment.ref, 1);

  }

}
