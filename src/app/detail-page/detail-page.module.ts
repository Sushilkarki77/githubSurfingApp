import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageRoutingModule } from './detail-page-routing.module';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [DetailPageComponent],
  imports: [
    CommonModule,
    DetailPageRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class DetailPageModule { }
