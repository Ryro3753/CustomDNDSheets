import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-sheet-secondary-stats-card',
  templateUrl: './character-sheet-secondary-stats-card.component.html',
  styleUrls: ['./character-sheet-secondary-stats-card.component.css']
})
export class CharacterSheetSecondaryStatsCardComponent implements OnInit {

  constructor() { }

  @Input() Value : number;
  @Input() Modifier : number;
  @Input() Name : string;
  @Input() ColorClass : string;

  ngOnInit(): void {
  }

}
