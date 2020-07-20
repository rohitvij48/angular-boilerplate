// Used to store key value pairs
interface Event {
  key: string;
  value?: any;
}

// Start of Event Service code
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class EventProvider {
  protected eventBus = new Subject<Event>();

  constructor() {
  }

  /**
   * Broadcasts event
   * @param key event key
   * @param value value is optional
   */
  public BroadcastEvent(key: string, value?: any) {
    this.eventBus.next({ key, value });
  }

  /**
   * Events event provider
   * @param key event key
   * @returns event
   */
  public event(key: string): Observable<any> {
    return this.eventBus.asObservable()
      .pipe(
        filter(e => e.key === key),
        map(e => e.value)
      );
  }
}
