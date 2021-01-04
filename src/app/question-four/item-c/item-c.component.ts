import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-c',
  templateUrl: './item-c.component.html',
  styleUrls: ['./item-c.component.scss']
})
export class ItemCComponent implements OnInit {
  @Input() textData: any
  constructor() { }

  ngOnInit(): void {
  }

}
