import { Component, Input, OnInit, Output } from '@angular/core';
import { Equipment } from 'src/app/models/equipment/equipment.model';

@Component({
  selector: 'app-equipment-editor-modal',
  templateUrl: './equipment-editor-modal.component.html',
  styleUrls: ['./equipment-editor-modal.component.css']
})
export class EquipmentEditorModalComponent implements OnInit {

  public Equipment: Equipment;
  public EquipmentModal: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

asd(){
  console.log(this.Equipment);
  this.EquipmentModal = false;
}

}
