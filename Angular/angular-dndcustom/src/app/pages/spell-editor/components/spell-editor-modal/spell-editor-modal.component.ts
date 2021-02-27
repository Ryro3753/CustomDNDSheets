import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Spell } from 'src/app/models/spell/spell.model';
import { IconService } from 'src/app/services/common-services/icon.service';
import { SpellService } from 'src/app/services/spell-services/spell.service';

@Component({
  selector: 'app-spell-editor-modal',
  templateUrl: './spell-editor-modal.component.html',
  styleUrls: ['./spell-editor-modal.component.css']
})
export class SpellEditorModalComponent implements OnInit {
  placeOverIconPath: string;
  iconPath: string;

  @Output() UploadFile : EventEmitter<any> = new EventEmitter<any>();
  @Output() NewSpell : EventEmitter<any> = new EventEmitter<any>();

  spell : Spell;
  spellEditorModal : boolean = false;

  constructor(readonly service : SpellService) { }

  ngOnInit(): void {
    this.placeOverIconPath = IconService.getPlaceOverIcon(2);
    this.iconPath = IconService.getImagesPath(2);
  }

  public async saveClick() {
    this.NewSpell.emit(this.spell);
    this.spellEditorModal = false;
  }
  cancelClick() {
    this.spellEditorModal = false;
  }
  async Upload(e){
    //Checking if this new equipment
      this.spell.hasIcon = 1;
      if(this.spell.ref == 0){
      let requestSpell = this.spell;
      requestSpell.hasIcon = 1;
      const ref = await this.service.insertOrUpdateSpell(requestSpell);
      this.spell.ref = ref;
    }
    this.UploadFile.emit(e);
  }
}
