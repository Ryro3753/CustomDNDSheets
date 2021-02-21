import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EquipmentScreenComponent } from './screens/equipment-screen.component';
import { RouterModule } from '@angular/router';

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
