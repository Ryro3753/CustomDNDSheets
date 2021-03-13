import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-sheet-skills-line',
  templateUrl: './character-sheet-skills-line.component.html',
  styleUrls: ['./character-sheet-skills-line.component.css']
})
export class CharacterSheetSkillsLineComponent implements OnInit {

  constructor() { }

  @Input() Profiency : boolean;
  @Input() Value : number;
  @Input() Name : string;
  @Input() ColorClass : string;

  ngOnInit(): void {
  }

}
