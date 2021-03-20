import { Component, OnInit } from '@angular/core';
import { CharacterBuilderService } from 'src/app/services/common-services/character-builder.service';

@Component({
  selector: 'app-character-builder-screen',
  templateUrl: './character-builder-screen.component.html',
  styleUrls: ['./character-builder-screen.component.css']
})
export class CharacterBuilderScreenComponent implements OnInit {

  constructor(readonly serviceBuilder : CharacterBuilderService) { }

  ngOnInit(): void {
    console.log(this.serviceBuilder.selectedCharacterRef);
  }

}
