import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDComponent } from './item-d.component';

describe('ItemDComponent', () => {
  let component: ItemDComponent;
  let fixture: ComponentFixture<ItemDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
