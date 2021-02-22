import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EquipmentScreenComponent } from './screens/equipment-screen.component';
import { TableModule } from 'primeng/table';
import { EquipmentEditorTableComponent } from './components/equipment-editor-table/equipment-editor-table.component';
import { EquipmentEditorModalComponent } from './components/equipment-editor-modal/equipment-editor-modal.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    EquipmentScreenComponent,
    EquipmentEditorTableComponent,
    EquipmentEditorModalComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: EquipmentScreenComponent
    }]),
    TableModule,
    DialogModule
  ],
  providers: [
  ],
})
export class EquipmentEditorModule { }
