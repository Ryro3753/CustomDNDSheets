import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EquipmentScreenComponent } from './screens/equipment-screen.component';
import { TableModule } from 'primeng/table';
import { EquipmentEditorTableComponent } from './components/equipment-editor-table/equipment-editor-table.component';
import { EquipmentEditorModalComponent } from './components/equipment-editor-modal/equipment-editor-modal.component';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { AvatarModule } from 'primeng/avatar';

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
    DialogModule,
    CommonModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    FileUploadModule,
    AvatarModule
  ],
  providers: [
  ],
})
export class EquipmentEditorModule { }
