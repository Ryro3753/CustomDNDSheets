import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Equipment } from 'src/app/models/equipment/equipment.model';
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
    readonly equipmentService: EquipmentService
  ) {

  }
  equipments: Equipment[];
  gridDataSource: Equipment[];
  async ngOnInit() {

    this.equipments = await this.equipmentService.getEquipments();
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
      const ref = await this.equipmentService.insertOrUpdateEquipment(e);
      e.ref = ref;
      this.equipments.push(e);
    }
    else {
      await this.equipmentService.insertOrUpdateEquipment(e)
    }
  }

  async emittedUploadIcon(e){
    console.log("asd");
    console.log(e);
  }

}
