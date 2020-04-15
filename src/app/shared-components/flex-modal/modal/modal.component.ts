import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { FlexModalService } from '../flex-modal.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modalID: any;
  @Input() fragment: TemplateRef<any>;
  @Input() width: any;
  @Input() height: any;
  @Input() transition: any;
  @Input() showDefaultAction: any;
  @Input() modalStyle: any;
  @Input() options: any;

  @Output() confirmed: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelled: EventEmitter<any> = new EventEmitter<any>();

  private visible = false;

  public data: any;
  private config: Object = {};

  constructor(
    private modalService: FlexModalService,
  ) {

  }

  ngOnInit() {
    this.setModalStyle(this.transition);
    this.modalService.onOpen(this.modalID, (data) => {
      this.data = data;
      this.visible = true;
    });

    this.modalService.onClose(this.modalID, (data) => {
      this.data = data;
      this.visible = false;
    });
  }

  confirm(data) {
    this.visible = false;
    this.confirmed.emit(data);
  }

  cancel(data) {
    this.visible = false;
    this.cancelled.emit(data);
  }


  onNoClick(): void {
    const x = { x: 'visible' };
  }

  setModalStyle(style: string) {
    switch (style) {
      case 'default':
        this.config['type'] = 'modal-3';
        this.config['transition'] = 'md-effect-3';
        break;
      case 'fade-in-scale':
        this.config['type'] = 'modal-1';
        this.config['transition'] = 'md-effect-1';
        break;
      case 'slide-in-right':
        this.config['type'] = 'modal-2';
        this.config['transition'] = 'md-effect-2';
        break;
      default:
        this.config['type'] = 'modal-3';
        this.config['transition'] = 'md-effect-3';
    }
  }

}
