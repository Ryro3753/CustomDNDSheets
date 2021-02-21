import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'EquipmentEditor',
    loadChildren: () => import('./pages/EquipmentEditor/EquipmentEditor.module').then(m => m.EquipmentEditorModule)
  },
  {
    path: 'SpellEditor',
    loadChildren: () => import('./pages/SpellEditor/SpellEditor.module').then(m => m.SpellEditorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
