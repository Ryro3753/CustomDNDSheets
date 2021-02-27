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
  @ViewChild('modal') equipmentModal: EquipmentEditorModalComponent;
  constructor(
    readonly service: EquipmentService,
    readonly iconService: IconService
    ) {

  }
  equipments: Equipment[];
  gridDataSource: Equipment[];

  public iconPath : string;
  public placeOverIconPath : string;

  async ngOnInit() {
    this.placeOverIconPath = IconService.getPlaceOverIcon(1);
    this.iconPath = IconService.getImagesPath(1);
    this.equipments = await this.service.getEquipments();
    this.gridDataSource = this.equipments;

  }
  itemDoubleClick(equipment) {
    this.equipmentModal.EquipmentModal = true;
    this.equipmentModal.Equipment = equipment;
  }

  createButtonClicked(e) {
    this.equipmentModal.Equipment = { ref: 0 } as Equipment;
    this.equipmentModal.EquipmentModal = true;

  }

  async emittedEquipment(e) {
    if (e.ref == 0) {
      const ref = await this.service.insertOrUpdateEquipment(e);
      e.ref = ref;
      this.equipmentModal.Equipment.ref = ref;
      this.equipments.push(e);
    }
    else {
      await this.service.insertOrUpdateEquipment(e)
    }
  }

  async emittedUploadIcon(e){
    await this.service.hasIconChange(this.equipmentModal.Equipment.ref);
    await this.iconService.uploadIcon(e.files[0],this.equipmentModal.Equipment.ref,1);
  }

}
