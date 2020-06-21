import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ItemSummaryBoxComponent } from './item-summary-box/item-summary-box.component';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ItemSummaryBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    ItemSummaryBoxComponent
  ]
})
export class SharedModule { }
