import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EquipmentScreenComponent } from './screens/equipment-screen.component';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [
      EquipmentScreenComponent
  ],
  imports: [
    RouterModule.forChild([{
        path: '',
        pathMatch: 'full',
        component: EquipmentScreenComponent
      }]),
      TableModule,
  ],
  providers: [
  ],
})
export class EquipmentEditorModule { }
