import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { RepoDetail } from 'src/app/core/interfaces/repo-detail';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit, OnDestroy {

  repoTitle: string;
  repoDetail: RepoDetail;
  repoContents: any;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private getDataService: GetDataService
  ) { }

  ngOnInit(): void {
    this.subscribeToQueryParamsChange();
  }

  subscribeToQueryParamsChange() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.repoTitle = params.repo;
      this.getRepoDetail(this.repoTitle);

      setTimeout(() => {
        this.getRepoContent(this.repoTitle);
      });

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getRepoDetail(repoTitle) {
    this.getDataService.getRepoDetail(repoTitle)
      .subscribe((data: RepoDetail) => {
        this.repoDetail = data;
      });
  }

  getRepoContent(repoTitle) {
    this.getDataService.getContents(repoTitle)
      .subscribe((data: any) => {
        this.repoContents = data;
      });
  }

}
