import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpellScreenComponent } from './screen/spell-editor-screen.component';
import { SpellEditorTableComponent } from './components/spell-editor-table/spell-editor-table.component';
import { SpellEditorModalComponent } from './components/spell-editor-modal/spell-editor-modal.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { AvatarModule } from 'primeng/avatar';
import { InputNumberModule } from 'primeng/inputnumber';
@NgModule({
  declarations: [
    SpellScreenComponent,
    SpellEditorTableComponent,
    SpellEditorModalComponent
  ],
  imports: [
    RouterModule.forChild([{
        path: '',
        pathMatch: 'full',
        component: SpellScreenComponent
      }]),
      TableModule,
      ButtonModule,
      CommonModule,
      DialogModule,
      FormsModule,
      InputTextareaModule,
      InputTextModule,
      FileUploadModule,
      AvatarModule,
      InputNumberModule
  ],
  providers: [
  ],
})
export class SpellEditorModule { }
