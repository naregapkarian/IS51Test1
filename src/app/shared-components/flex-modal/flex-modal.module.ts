import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../../material-design/material-design.module';
import { FlexModalService } from './flex-modal.service';
import { ModalComponent } from './modal/modal.component';
import { FlexModalComponent } from './flex-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule
  ],
  declarations: [
    ModalComponent,
    FlexModalComponent
  ],
  exports: [
    FlexModalComponent
  ],
  providers: [
    FlexModalService
  ]
})
export class FlexModalModule { }
