import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result/search-result.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchResultRoutingModule
  ]
})
export class SearchResultModule { }
