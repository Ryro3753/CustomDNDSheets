import { Component, OnInit } from '@angular/core';
import { Spell } from 'src/app/models/spell/spell.model';
import { IconService } from 'src/app/services/common-services/icon.service';
import { SpellService } from 'src/app/services/spell-services/spell.service';

@Component({
  selector: 'app-spell-editor-table',
  templateUrl: './spell-editor-table.component.html',
  styleUrls: ['./spell-editor-table.component.css']
})
export class SpellEditorTableComponent implements OnInit {

  gridDataSource: Spell[];

  public iconPath : string;
  public placeOverIconPath : string;

  constructor(readonly service : SpellService) { }

  async ngOnInit(): Promise<void> {
    this.iconPath = IconService.getImagesPath(2);
    this.placeOverIconPath = IconService.getPlaceOverIcon(2);
    this.gridDataSource = await this.service.getSpells();
    console.log(this.gridDataSource);
  }

}
