import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Subscription } from 'rxjs';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { SearchResult } from 'src/app/core/interfaces/search-result';
import { PaginationInstance } from 'ngx-pagination';

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
  sort: 'match' | 'stars' | 'fork' | 'updated' | '' = 'updated';
  order: 'asc' | 'desc' | '' = 'desc';

  public config: PaginationInstance = {
    id: 'advanced',
    currentPage: 1,
    itemsPerPage: this.perPage
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
      this.searchKey = params.searchKey;
      this.getSearchResult();
    });
  }

  getSearchResult() {
    this.loading = true;
    this.searchResult = null;
    const queryParameter = this.getQueryParameter(this.searchKey, this.sort, this.order, this.perPage, this.config.currentPage);

    this.getDatService.getPublicRepositories(queryParameter)
      .subscribe((data: SearchResult) => {
        this.searchResult = data;
        this.config.totalItems = data?.total_count > 1000 ? 1000 : data?.total_count;
        this.config.itemsPerPage = data?.items?.length;
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

  changeFilterProps(e) {
    switch (e) {
      case 'Best Match':
        this.sort = '';
        this.order = '';
        break;
      case 'Most stars':
        this.sort = 'stars';
        this.order = 'desc';
        break;
      case 'Fewest stars':
        this.sort = 'stars';
        this.order = 'asc';
        break;
      case 'Fewest fork':
        this.sort = 'fork';
        this.order = 'asc';
        break;
      case 'Most fork':
        this.sort = 'fork';
        this.order = 'desc';
        break;
      case 'Recently updated':
        this.sort = 'updated';
        this.order = 'desc';
        break;
      case 'Least Recently updated':
        this.sort = 'updated';
        this.order = 'asc';
        break;
    }

    this.getSearchResult();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
