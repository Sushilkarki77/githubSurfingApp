import { Component, OnInit, ElementRef, ViewChild, Renderer2, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  dropDownSortBy = false;

  selectedFilterType = 'Best match';

  @Output()
  filterTypeChanged = new EventEmitter<string>();

  sortType = ['Best match', 'Most stars', 'Fewest stars', 'Fewest fork', 'Most fork', 'Recently updated', 'Least recently updated'];

  @ViewChild('dropdownButtonSortBy', { static: true }) dropdownButtonSortBy: ElementRef;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.dropdownButtonSortBy.nativeElement) {
        this.dropDownSortBy = false;
      }
    });
  }

  ngOnInit() {

  }

  selectFilterType(key) {
    this.selectedFilterType = key;
    this.filterTypeChanged.emit(key);
  }



}
