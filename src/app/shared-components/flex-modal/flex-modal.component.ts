import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-flex-modal',
  templateUrl: './flex-modal.component.html',
  styleUrls: ['./flex-modal.component.css']
})
export class FlexModalComponent implements OnInit {

  @Input() modalID: any;
  @Input() transition: string;
  @Input() width: string;
  @Input() height: string;
  @Input() showDefaultAction: boolean;
  @Input() showToolbar: boolean;
  @Input() modalStyle: any;
  @Input() options: any;
  @Input() showAction: boolean;
  @ViewChild('modal') modal: ElementRef;

  @Output() confirmed: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelled: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.width = this.width == null ? '350px' : this.width;
    this.height = this.height == null ? '250px' : this.height;
    this.modalStyle = this.modalStyle == null ? null : this.modalStyle;
    this.showDefaultAction = this.showDefaultAction == null ? true : this.showDefaultAction;
    this.showAction = this.showAction == null ? true : this.showAction;
    this.showToolbar = this.showToolbar == null ? true : this.showToolbar;
    this.modalID = this.modalID == null ? 1 : this.modalID;
    this.options = this.options == null ? {} : this.options;
  }

  confirm(event) {
    this.confirmed.emit({ confirmed: true, data: event });
  }

  cancel(event) {
    this.cancelled.emit({ confirmed: false, data: event });
  }

}
