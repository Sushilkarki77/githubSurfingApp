import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ItemSummaryBoxComponent } from './item-summary-box/item-summary-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ItemSummaryBoxComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    ItemSummaryBoxComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
