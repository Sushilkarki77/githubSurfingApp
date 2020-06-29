import { Component, Input, OnChanges } from '@angular/core';
import { RepoSummary } from 'src/app/core/interfaces/repo-summary';
import { faDatabase, faEye } from '@fortawesome/free-solid-svg-icons';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-summary-box',
  templateUrl: './item-summary-box.component.html',
  styleUrls: ['./item-summary-box.component.scss']
})
export class ItemSummaryBoxComponent implements OnChanges {

  @Input()
  item: RepoSummary;

  faDatabase = faDatabase;
  faNetworkWired = faNetworkWired;
  faCircle = faCircle;
  faStar = faStar;
  faEye = faEye;

  constructor( private router: Router) { }

  ngOnChanges(): void {
  }

  navigateToDescription(item: RepoSummary) {
    this.router.navigate(['detail'], { queryParams: { repo: item?.full_name} });
  }

}
