import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ItemSummaryBoxComponent } from './item-summary-box/item-summary-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingComponent } from './loading/loading.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';
import { ProfileImageComponent } from './profile-image/profile-image.component';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ItemSummaryBoxComponent,
    LoadingComponent,
    SearchFilterComponent,
    LogoComponent,
    ProfileImageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    ItemSummaryBoxComponent,
    LoadingComponent,
    SearchFilterComponent,
    LogoComponent,
    ProfileImageComponent
  ]
})
export class SharedModule { }
