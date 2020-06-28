import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { SearchResult } from 'src/app/core/interfaces/search-result';
import { PaginationInstance } from 'ngx-pagination';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnDestroy {

  loading: boolean;
  sub: Subscription;
  searchKey: string;
  searchResult: SearchResult;
  perPage = 36;

  public config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1
  };

  constructor(
    private route: ActivatedRoute,
    private getDatService: GetDataService
  ) { }

  ngOnInit(): void {
    this.subscribeToQueryParamsChange();
  }

  subscribeToQueryParamsChange() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.searchKey = params['searchKey'];
      this.getSearchResult();
    });
  }

  getSearchResult() {
    this.loading = true;
    this.searchResult = null;
    const sort = 'updated';
    const order = 'asc';
    const queryParameter = this.getQueryParameter(this.searchKey, sort, order, this.perPage, this.config.currentPage);
    console.log(queryParameter);
    this.getDatService.getPublicRepositories(queryParameter)
      .subscribe((data: SearchResult) => {
        this.searchResult = data;
        console.log(data);
        this.config.totalItems = data.total_count;
        this.loading = false;
      });
  }

  getQueryParameter(searchKey, sort, order, perPage, page) {
    const queryParameter = `q=` + searchKey + `&sort=` + sort + `&order=` + order + `&per_page=` + perPage + `&page=` + page;
    return queryParameter;
  }

  onPageChange(page) {
    this.config.currentPage = page;
    this.getSearchResult();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
