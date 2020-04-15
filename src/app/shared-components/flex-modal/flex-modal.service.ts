import { Injectable } from '@angular/core';
import { EventService } from '../../shared-services/event-service/event.service';

@Injectable()
export class FlexModalService {
  constructor(
    private eventService: EventService
  ) { }

  openDialog(modalID?: any, data?: any): void {
    modalID = modalID == null ? 1 : modalID;
    this.eventService.broadcast(`open-modal-${modalID}`, data);
  }

  closeDialog(modalID?: any, data?: any): void {
    modalID = modalID == null ? 1 : modalID;
    this.eventService.broadcast(`close-modal-${modalID}`, data);
  }

  onOpen(modalID, cb: any) {
    modalID = modalID == null ? 1 : modalID;
    this.eventService.on(`open-modal-${modalID}`, (data) => {
      cb(data);
    });
  }

  onClose(modalID, cb: any) {
    modalID = modalID == null ? 1 : modalID;
    this.eventService.on(`close-modal-${modalID}`, (data) => {
      cb(data);
    });
  }

}
