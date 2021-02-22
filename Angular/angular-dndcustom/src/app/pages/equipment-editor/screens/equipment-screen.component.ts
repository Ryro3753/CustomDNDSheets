import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/models/equipment/equipment.model';
import { EquipmentService } from 'src/app/services/equipment-services/equipment.service';

@Component({
  selector: 'app-equipment-screen',
  templateUrl: './equipment-screen.component.html',
  styleUrls: ['./equipment-screen.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentScreenComponent implements OnInit {

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
