import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  searchKey: string;
  sub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribeToQueryParamsChange();
  }

  navigateToSearchResultPage(key): void {
    if (key && key.trim()) { this.router.navigate(['search'], { queryParams: { searchKey: key } }); }
  }

  subscribeToQueryParamsChange() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.searchKey = params.searchKey;
    });
  }

  keyupSearchInputField(event, searchKey) {
    if (event.keyCode === 13) {
      this.navigateToSearchResultPage(searchKey);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}


