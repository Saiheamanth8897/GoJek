import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-d',
  templateUrl: './item-d.component.html',
  styleUrls: ['./item-d.component.scss']
})
export class ItemDComponent implements OnInit {
@Input() textData: any
  constructor() { }

  ngOnInit(): void {
  }

}
