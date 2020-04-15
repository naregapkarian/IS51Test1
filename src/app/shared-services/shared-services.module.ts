import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from './event-service/event.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    EventService
  ]
})
export class SharedServicesModule { }
