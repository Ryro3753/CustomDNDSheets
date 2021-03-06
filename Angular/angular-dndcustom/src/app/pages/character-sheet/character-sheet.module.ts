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
import { RadioButtonModule } from 'primeng/radiobutton';
import { CharacterSheetSkillsComponent } from './components/character-sheet-skills/character-sheet-skills.component';
import { CharacterSheetSelectionComponent } from './components/character-sheet-selection/character-sheet-selection.component';
import { CharacterSheetMainStatsComponent } from './components/character-sheet-main-stats/character-sheet-main-stats.component';
import { CharacterSheetDetailsComponent } from './components/character-sheet-details/character-sheet-details.component';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { DetailsSpellsAccordionComponent } from './components/character-sheet-details/components/details-spells-accordion/details-spells-accordion.component';
import { AccordionModule } from 'primeng/accordion';
import { DetailsBackgroundAccordionComponent } from './components/character-sheet-details/components/details-background-accordion/details-background-accordion.component';
import { SidebarModule } from 'primeng/sidebar';
import { CharacterSheetSidebarComponent } from './components/character-sheet-sidebar/character-sheet-sidebar.component';
import { CharacterSheetSkillsLineComponent } from './components/character-sheet-skills/components/character-sheet-skills-line/character-sheet-skills-line.component';
import { CharacterSheetSecondaryStatsCardComponent } from './components/character-sheet-secondary-stats/components/character-sheet-secondary-stats-card/character-sheet-secondary-stats-card.component';
import { CharacterBuilderService } from 'src/app/services/common-services/character-builder.service';

@NgModule({
  declarations: [
    CharacterSheetScreenComponent,
    CharacterSheetSecondaryStatsComponent,
    CharacterSheetSavingThrowsComponent,
    CharacterSheetSkillsComponent,
    CharacterSheetSelectionComponent,
    CharacterSheetMainStatsComponent,
    CharacterSheetDetailsComponent,
    DetailsSpellsAccordionComponent ,
    DetailsBackgroundAccordionComponent,
    CharacterSheetSidebarComponent,
    CharacterSheetSkillsLineComponent,
    CharacterSheetSecondaryStatsCardComponent,
    ],
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
    RadioButtonModule,
    TabViewModule,
    InputTextModule,
    AccordionModule,
    SidebarModule
  ],
  providers: [
    CharacterSheetCalculator,
  ],
})
export class CharacterSheetModule { }
