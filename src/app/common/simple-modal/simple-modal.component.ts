import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { element } from 'protractor';
import { JQ_TOKEN } from '../jquery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @Input() CloseOnBodyClick: string;
  @ViewChild('modalContainer', {static: false}) containerEl: ElementRef;
  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }

  closeModal() {
    if (this.CloseOnBodyClick.toLocaleLowerCase() === 'true') {
   this.$(this.containerEl.nativeElement).modal('hide');
  }
}
}
