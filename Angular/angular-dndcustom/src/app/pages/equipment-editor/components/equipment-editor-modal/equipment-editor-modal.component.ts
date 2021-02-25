import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  
  @Output() UploadFile : EventEmitter<any> = new EventEmitter<any>();
  @Output() NewEquipment : EventEmitter<Equipment> = new EventEmitter<Equipment>();

  constructor(readonly service : EquipmentService) { }

  ngOnInit(): void {
  }

  cancelClick() {
    this.EquipmentModal = false;
  }

  public async saveClick() {
    this.NewEquipment.emit(this.Equipment);
    this.EquipmentModal = false;
  }

  async Upload(e){
    //Checking if this new equipment
    if(this.Equipment.ref == 0){
      const ref = await this.service.insertOrUpdateEquipment(this.Equipment);
      this.Equipment.ref = ref;

    }
    this.UploadFile.emit(e);
  }
}
