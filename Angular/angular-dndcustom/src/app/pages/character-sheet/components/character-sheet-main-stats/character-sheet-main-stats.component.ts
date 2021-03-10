import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { CharacterMainStats } from 'src/app/models/character/character-main-stats.model';
import { Character } from 'src/app/models/Character/Character.model';
import { CharacterMainStatsService } from 'src/app/services/character-services/character-main-stats.service';

@Component({
  selector: 'app-character-sheet-main-stats',
  templateUrl: './character-sheet-main-stats.component.html',
  styleUrls: ['./character-sheet-main-stats.component.css']
})
export class CharacterSheetMainStatsComponent implements OnInit {

  constructor(readonly service : CharacterMainStatsService) { }

  allMainStats : CharacterMainStats[];
  mainStat : CharacterMainStats;
  colorClass : string = "";
  currentHealthEdit : boolean = false;
  tempHealthEdit : boolean = false;
  healthParentheses : boolean = true;

  @ViewChild('healthInput', {static: false}) healthInput: ElementRef;
  @ViewChild('tempHealthInput', {static: false}) tempHealthInput: ElementRef;


  async ngOnInit(): Promise<void> {
    this.allMainStats = await this.service.getCharactersMainStats();
  }

  
  mainStatFilter(characterRef : number) : CharacterMainStats{
    return this.allMainStats.filter(i => i.characterRef == characterRef)[0];
  }

  @Input() set character(character: Character) {
    if (character.ref == 0) { return }
    this.mainStat = this.mainStatFilter(character.ref);
    this.colorClass = "color"+character.class.toLowerCase();
  }

  editCurrentHealth(e){
    this.currentHealthEdit = true;
    setTimeout(()=>{
    this.healthInput.nativeElement.focus();
    });
  }
  editCurrentHealthClose(){
    this.currentHealthEdit = false;
  }
  editTempHealth(){
    this.tempHealthEdit = true;
    setTimeout(()=>{
      this.tempHealthInput.nativeElement.focus();
      });
      this.healthParentheses = false;
    }
  editTempHealthClose(){
    this.tempHealthEdit = false;
    this.healthParentheses = true;
  }
}
