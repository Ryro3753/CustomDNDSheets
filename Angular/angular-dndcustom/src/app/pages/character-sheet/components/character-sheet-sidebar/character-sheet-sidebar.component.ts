import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character-sheet-sidebar',
  templateUrl: './character-sheet-sidebar.component.html',
  styleUrls: ['./character-sheet-sidebar.component.css']
})
export class CharacterSheetSidebarComponent implements OnInit {

  constructor() { }

  @Input() displayBarSide : boolean = false;
  @Output() OnHideClicked : EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  sideBarHide(){
    this.displayBarSide = false;
    this.OnHideClicked.emit();
  }
}
