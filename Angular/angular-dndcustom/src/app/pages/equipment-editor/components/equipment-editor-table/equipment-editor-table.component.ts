import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/models/equipment/equipment.model';
import { EquipmentService } from 'src/app/services/equipment-services/equipment.service';

@Component({
  selector: 'app-equipment-editor-table',
  templateUrl: './equipment-editor-table.component.html',
  styleUrls: ['./equipment-editor-table.component.css']
})
export class EquipmentEditorTableComponent implements OnInit {

  constructor(
    readonly equipmentService: EquipmentService
  ) {

  }
  equipments : Equipment[];
  gridDataSource : Equipment[];
  async ngOnInit() {
   this.equipments =  await this.equipmentService.getEquipments();
   this.gridDataSource = this.equipments;
  }
asd(character){
  console.log(character);
}

}
