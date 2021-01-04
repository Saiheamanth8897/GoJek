import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEComponent } from './item-e.component';

describe('ItemEComponent', () => {
  let component: ItemEComponent;
  let fixture: ComponentFixture<ItemEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
