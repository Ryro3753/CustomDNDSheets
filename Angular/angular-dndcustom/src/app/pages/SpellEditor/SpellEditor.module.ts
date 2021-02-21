import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpellScreenComponent } from './screen/spell-screen.component';

@NgModule({
  declarations: [
    SpellScreenComponent
  ],
  imports: [
    RouterModule.forChild([{
        path: '',
        pathMatch: 'full',
        component: SpellScreenComponent
      }]),   
  ],
  providers: [
  ],
})
export class SpellEditorModule { }
