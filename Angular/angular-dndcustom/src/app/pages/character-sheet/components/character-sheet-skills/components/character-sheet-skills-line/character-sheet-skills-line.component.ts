import { Component, Input, OnInit } from '@angular/core';
import { SideBarEvent } from 'src/app/events/side-bar.event';
import { MessageBusService } from 'src/app/services/common-services/messagebus.service';

@Component({
  selector: 'app-character-sheet-skills-line',
  templateUrl: './character-sheet-skills-line.component.html',
  styleUrls: ['./character-sheet-skills-line.component.css']
})
export class CharacterSheetSkillsLineComponent implements OnInit {

  constructor(readonly bus : MessageBusService) { }

  @Input() Profiency : boolean;
  @Input() Value : number;
  @Input() Name : string;
  @Input() ColorClass : string;

  ngOnInit(): void {
  }

  openSideBar(){
    this.bus.publish(new SideBarEvent(this.Name));
  }

}
