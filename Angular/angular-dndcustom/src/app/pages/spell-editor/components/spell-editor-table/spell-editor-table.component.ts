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
    await this.iconService.uploadIcon(e.files[0], this.spellModal.spell.ref, 2);
  }

  async emittedEquipment(e) {
    if (this.gridDataSource.filter(i => i.ref == e.ref).length == 0) {
      const ref = await this.service.insertOrUpdateSpell(e);
      e.ref = ref;
      this.spellModal.spell.ref = ref;
      this.gridDataSource.push(e);
    }
    else {
      await this.service.insertOrUpdateSpell(e)
    }
  }

  deleteButtonClicked(e) {
    this.service.deleteSpell(e.ref);
    this.gridDataSource = this.gridDataSource.filter(i => i.ref !== e.ref);
  }
  spellClick(spell : Spell){
    this.spellModal.spell.ref = spell.ref;
    this.spellModal.spell.spellName = spell.spellName;
    this.spellModal.spell.range = spell.range;
    this.spellModal.spell.duration = spell.duration;
    this.spellModal.spell.castType = spell.castType;
    this.spellModal.spell.actionTime = spell.actionTime;
    this.spellModal.spell.components = spell.components;
    this.spellModal.spell.level = spell.level;
    this.spellModal.spell.damageBase = spell.damageBase;
    this.spellModal.spell.hitBase = spell.hitBase;
    this.spellModal.spell.hasIcon = spell.hasIcon;

  }
}
