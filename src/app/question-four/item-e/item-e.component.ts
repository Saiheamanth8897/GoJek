import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-e',
  templateUrl: './item-e.component.html',
  styleUrls: ['./item-e.component.scss']
})
export class ItemEComponent implements OnInit {
  message: any;
  @Output()
  postMessageEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  handleClick() {
    this.postMessageEvent.emit(this.message)
  }
}
