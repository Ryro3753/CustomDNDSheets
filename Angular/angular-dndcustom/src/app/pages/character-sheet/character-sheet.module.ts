import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterSheetScreenComponent } from './screen/character-sheet-screen.component';
import { CharacterSheetSecondaryStatsComponent } from './components/character-sheet-secondary-stats/character-sheet-secondary-stats.component';
import { CharacterSheetSavingThrowsComponent } from './components/character-sheet-saving-throws/character-sheet-saving-throws.component';
import { CardModule, } from 'primeng/card';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
  CharacterSheetScreenComponent,
  CharacterSheetSecondaryStatsComponent,
  CharacterSheetSavingThrowsComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: CharacterSheetScreenComponent
    }]),
    CommonModule,
    CardModule,
    FormsModule,

  ],
  providers: [
  ],
})
export class CharacterSheetModule { }
