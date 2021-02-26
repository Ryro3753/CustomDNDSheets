import { Component, OnInit } from '@angular/core';
import { Spell } from 'src/app/models/spell/spell.model';

@Component({
  selector: 'app-spell-editor-table',
  templateUrl: './spell-editor-table.component.html',
  styleUrls: ['./spell-editor-table.component.css']
})
export class SpellEditorTableComponent implements OnInit {

  gridDataSource: Spell[];
  constructor() { }

  ngOnInit(): void {
  }

}
