import { Component,  Input, OnChanges } from '@angular/core';
import { RepoSummary } from 'src/app/core/interfaces/repo-summary';

@Component({
  selector: 'app-item-summary-box',
  templateUrl: './item-summary-box.component.html',
  styleUrls: ['./item-summary-box.component.scss']
})
export class ItemSummaryBoxComponent implements OnChanges {

  @Input()
  item: RepoSummary;

  constructor() { }

  ngOnChanges(): void {
  }

}
