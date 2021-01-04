import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-a',
  templateUrl: './item-a.component.html',
  styleUrls: ['./item-a.component.scss']
})
export class ItemAComponent implements OnInit {
  @Input() textData: any
  constructor() { }

  ngOnInit(): void {
  }

}
