import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterSheetScreenComponent } from './screen/character-sheet-screen.component';
import { CharacterSheetSecondaryStatsComponent } from './components/character-sheet-secondary-stats/character-sheet-secondary-stats.component';
import { CharacterSheetSavingThrowsComponent } from './components/character-sheet-saving-throws/character-sheet-saving-throws.component';
import { CardModule, } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { CharacterSheetCalculator } from './character-sheet.calculator';
import { CarouselModule } from 'primeng/carousel';
import { SkeletonModule } from 'primeng/skeleton';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';

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
    CarouselModule,
    SkeletonModule,
    AvatarModule,
    ButtonModule,
    RadioButtonModule
  ],
  providers: [
    CharacterSheetCalculator
  ],
})
export class CharacterSheetModule { }
