import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Avatar } from 'primeng/avatar';
import { Equipment } from 'src/app/models/equipment/equipment.model';
import { IconService } from 'src/app/services/common-services/icon.service';
import { EquipmentService } from 'src/app/services/equipment-services/equipment.service';

@Component({
  selector: 'app-equipment-editor-modal',
  templateUrl: './equipment-editor-modal.component.html',
  styleUrls: ['./equipment-editor-modal.component.css']
})
export class EquipmentEditorModalComponent implements OnInit {

  public Equipment: Equipment;
  public EquipmentModal: boolean = false;
  public iconPath : string;
  public placeOverIconPath : string;
  
  @Output() UploadFile : EventEmitter<any> = new EventEmitter<any>();
  @Output() NewEquipment : EventEmitter<Equipment> = new EventEmitter<Equipment>();

  
  constructor(readonly service : EquipmentService,
    readonly iconService : IconService) { }

  ngOnInit(): void {
    this.placeOverIconPath = IconService.getPlaceOverIcon();
    this.iconPath = this.iconService.getImagesPath();
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
