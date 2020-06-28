import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
