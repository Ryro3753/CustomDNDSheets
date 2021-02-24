import { Component, Input, OnInit, Output } from '@angular/core';
import { Equipment } from 'src/app/models/equipment/equipment.model';
import { EquipmentService } from 'src/app/services/equipment-services/equipment.service';

@Component({
  selector: 'app-equipment-editor-modal',
  templateUrl: './equipment-editor-modal.component.html',
  styleUrls: ['./equipment-editor-modal.component.css']
})
export class EquipmentEditorModalComponent implements OnInit {

  public Equipment: Equipment;
  public EquipmentModal: boolean = false;


  constructor(readonly service: EquipmentService) { }

  ngOnInit(): void {
  }

  cancelClick() {
    this.EquipmentModal = false;
  }

  async saveClick() {
    console.log(this.Equipment);
    console.log(await this.service.insertOrUpdateEquipment(this.Equipment));
    this.EquipmentModal = false;
  }

  Upload(e){
    console.log(e);
  }
}
