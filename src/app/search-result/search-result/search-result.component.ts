import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { SearchResult } from 'src/app/core/interfaces/search-result';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnDestroy {

  sub: Subscription;
  searchKey: string;
  searchResult: SearchResult;

  constructor(
    private route: ActivatedRoute,
    private getDatService: GetDataService
  ) { }

  ngOnInit(): void {
    this.subscribeToQueryParamsChange();
  }

  subscribeToQueryParamsChange() {
    this.sub = this.route.queryParams.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.searchKey = params['searchKey'];
      this.getSearchResult(this.searchKey);
    });
  }

  getSearchResult(searchKey) {
    const sort = 'updated';
    const order = 'asc';
    const perPage = '28';
    const queryParameter = this.getQueryParameter(this.searchKey, sort, order, perPage);

    this.getDatService.getPublicRepositories(queryParameter)
      .subscribe((data: SearchResult) => {
        this.searchResult = data;
      });
  }

  getQueryParameter(searchKey, sort, order, perPage) {
    const queryParameter = `q=` + searchKey + `&sort=` + sort + `&order=` + order + `&per_page=` + perPage;
    return queryParameter;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
