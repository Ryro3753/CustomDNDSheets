import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Equipment } from 'src/app/models/equipment/equipment.model';
import { EquipmentIconService } from 'src/app/services/equipment-services/equipment-icon.service';
import { EquipmentService } from 'src/app/services/equipment-services/equipment.service';
import { servicesVersion } from 'typescript';
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
    readonly iconService: EquipmentIconService
    ) {

  }
  equipments: Equipment[];
  gridDataSource: Equipment[];

  public iconPath : string;
  public placeOverIconPath : string;

  async ngOnInit() {
    this.placeOverIconPath = EquipmentIconService.getPlaceOverIcon();
    this.iconPath = this.iconService.getImagesPath();
    this.equipments = await this.service.getEquipments();
    this.gridDataSource = this.equipments;

  }
  itemDoubleClick(character) {
    this.equipmentModal.EquipmentModal = true;
    this.equipmentModal.Equipment = character;
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
    this.iconService.uploadIcon(e.files[0],this.equipmentModal.Equipment.ref);
  }

}
