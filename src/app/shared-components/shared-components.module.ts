import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModalModule} from './flex-modal/flex-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FlexModalModule
  ],
  declarations: [],
  exports: [
    FlexModalModule
  ]
})
export class SharedComponentsModule { }
