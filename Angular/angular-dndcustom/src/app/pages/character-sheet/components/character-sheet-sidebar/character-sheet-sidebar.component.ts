import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { SideBarEvent } from 'src/app/events/side-bar.event';
import { MessageBusService } from 'src/app/services/common-services/messagebus.service';

@Component({
  selector: 'app-character-sheet-sidebar',
  templateUrl: './character-sheet-sidebar.component.html',
  styleUrls: ['./character-sheet-sidebar.component.css']
})
export class CharacterSheetSidebarComponent implements OnInit, OnDestroy {
  text: string;
  subscriptions: SubscriptionLike[] = [];
  constructor(readonly bus : MessageBusService) {
    this.subscriptions.push(this.bus.of(SideBarEvent).subscribe(this.sideBarEvent.bind(this)));
   }
  
  ngOnDestroy() {
    this.subscriptions.forEach(f => f.unsubscribe())
  }


  sideBarEvent(sideBarEvent: SideBarEvent) {
    this.displayBarSide = true;
    this.text = sideBarEvent.key;
    console.log('b')
  }

  @Input() displayBarSide : boolean = false;
  @Output() OnHideClicked : EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  sideBarHide(){
    this.displayBarSide = false;
    this.OnHideClicked.emit();
  }



}
