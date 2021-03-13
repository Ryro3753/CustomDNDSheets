import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { filter, map } from 'rxjs/operators';

interface Message {
  channel: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {
  private message$: Subject<Message>

  constructor() {
    this.message$ = new Subject<Message>();
  }

  /**
   * Push a new event
   */
  public publish<T>(message: T): void {
    const channel = (<any>message.constructor).name;
    this.message$.next({ channel: channel, data: message });
  }

  /**
   * Get's listener of the give type. Then you can subscribe/unsubscribe
   */
  public of<T>(messageType: { new(...args: any[]): T }): Observable<T> {
    const channel = (<any>messageType).name;
    return this.message$
      .pipe(
        filter(m => m.channel === channel),
        map(m => m.data));
  }
}