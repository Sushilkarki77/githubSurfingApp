import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSummaryBoxComponent } from './item-summary-box.component';

describe('ItemSummaryBoxComponent', () => {
  let component: ItemSummaryBoxComponent;
  let fixture: ComponentFixture<ItemSummaryBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSummaryBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSummaryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
