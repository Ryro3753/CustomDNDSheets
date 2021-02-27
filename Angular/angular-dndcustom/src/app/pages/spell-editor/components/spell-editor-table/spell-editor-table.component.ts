import { Component, OnInit, ViewChild } from '@angular/core';
import { Spell } from 'src/app/models/spell/spell.model';
import { IconService } from 'src/app/services/common-services/icon.service';
import { SpellService } from 'src/app/services/spell-services/spell.service';
import { SpellEditorModalComponent } from '../spell-editor-modal/spell-editor-modal.component';

@Component({
  selector: 'app-spell-editor-table',
  templateUrl: './spell-editor-table.component.html',
  styleUrls: ['./spell-editor-table.component.css']
})
export class SpellEditorTableComponent implements OnInit {

  gridDataSource: Spell[];
  @ViewChild('spellModal') spellModal: SpellEditorModalComponent;

  public iconPath: string;
  public placeOverIconPath: string;


  constructor(readonly service: SpellService,
    readonly iconService : IconService) { }

  async ngOnInit(): Promise<void> {
    this.iconPath = IconService.getImagesPath(2);
    this.placeOverIconPath = IconService.getPlaceOverIcon(2);
    this.gridDataSource = await this.service.getSpells();
    console.log(this.gridDataSource);
  }
  async emittedUploadIcon(e) {
    await this.service.hasIconChange(this.spellModal.spell.ref);
    await this.iconService.uploadIcon(e.files[0], this.spellModal.spell.ref, 2);
  }
}
