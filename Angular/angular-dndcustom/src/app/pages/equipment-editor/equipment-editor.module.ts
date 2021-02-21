import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EquipmentScreenComponent } from './screens/equipment-screen.component';

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
  ],
  providers: [
  ],
})
export class EquipmentEditorModule { }
