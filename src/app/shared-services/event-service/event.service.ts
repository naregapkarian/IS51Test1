import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';

@Injectable()
export class EventService {
  events: any;
  listeners: any;
  eventsSubject: any;

  constructor() {
    this.listeners = {};
    this.eventsSubject = new Subject();

    this.events = from(this.eventsSubject);

    this.events.subscribe(({ name, args }) => {
      if (this.listeners[name]) {
        for (const listener of this.listeners[name]) {
          listener(...args);
        }
      }
    });
  }

  on(name: any, listener: any) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }
    this.listeners[name].push(listener);
    return this;
  }

  broadcast(name, ...args) {
    this.eventsSubject.next({ name, args });
    return this;
  }

}
