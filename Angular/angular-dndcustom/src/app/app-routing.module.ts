import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'EquipmentEditor',
    loadChildren: () => import('./pages/equipment-editor/equipment-editor.module').then(m => m.EquipmentEditorModule)
  },
  {
    path: 'SpellEditor',
    loadChildren: () => import('./pages/spell-editor/spell-editor.module').then(m => m.SpellEditorModule)
  },
  {
    path: 'CharacterSheets',
    loadChildren: () => import('./pages/character-sheet/character-sheet.module').then(m => m.CharacterSheetModule)
  },
  {
    path: 'CharacterBuilder',
    loadChildren: () => import('./pages/character-builder/character-builder.module').then(m => m.CharacterBuilderModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
