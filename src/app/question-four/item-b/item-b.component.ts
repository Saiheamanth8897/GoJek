import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-b',
  templateUrl: './item-b.component.html',
  styleUrls: ['./item-b.component.scss']
})
export class ItemBComponent implements OnInit {
  @Input() textData: any
  constructor() { }

  ngOnInit(): void {
  }

}
