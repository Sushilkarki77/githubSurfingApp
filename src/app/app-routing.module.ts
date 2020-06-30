import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Though it was ot necessary to do add lazyloading routes, this is just for scalability

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
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
