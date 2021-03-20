import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterBuilderScreenComponent } from './screen/character-builder-screen.component';
import { CharacterBuilderService } from 'src/app/services/common-services/character-builder.service';

@NgModule({
  declarations: [
    CharacterBuilderScreenComponent
],
  imports: [
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: CharacterBuilderScreenComponent
    }]),
    CommonModule,
    FormsModule,
  ],
  providers: [
  ],
})
export class CharacterBuilderModule { }
