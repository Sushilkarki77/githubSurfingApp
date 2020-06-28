import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./search-result/search-result.module').then(m => m.SearchResultModule),
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail-page/detail-page.module').then(m => m.DetailPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
