import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'EquipmentEditor',
    loadChildren: () => import('./pages/EquipmentEditor/equipmentEditor.module').then(m => m.EquipmentEditorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
