import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { RepoDetail } from 'src/app/core/interfaces/repo-detail';
import { RepoContent } from 'src/app/core/interfaces/repo-content';
import { Base64 } from 'js-base64';
import { Remarkable } from 'remarkable';
import { faCircle, faCodeBranch, faEye, faExclamation, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit, OnDestroy {

  repoTitle: string;
  repoDetail: RepoDetail;
  readMeContent: string;
  sub: Subscription;
  loading: boolean;

  faCircle = faCircle;
  codeBrach = faCodeBranch;
  faEye = faEye;
  faExclamation = faExclamation;
  faNetworkWired = faNetworkWired;


  constructor(
    private route: ActivatedRoute,
    private getDataService: GetDataService
  ) { }

  ngOnInit(): void {
    this.subscribeToQueryParamsChange();
  }

  subscribeToQueryParamsChange() {
    this.loading = true;
    this.sub = this.route.queryParams.subscribe(params => {
      this.repoTitle = params.repo;

      this.getRepoDetail(this.repoTitle);
      this.getRepoReadMe(this.repoTitle);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getRepoDetail(repoTitle) {
    this.getDataService.getRepoDetail(repoTitle)
      .subscribe((data: RepoDetail) => {
        this.repoDetail = data;
        this.loading = false;
      });
  }

  getRepoReadMe(repoTitle) {
    this.getDataService.getRepoReadMe(repoTitle)
      .subscribe((data: RepoContent) => {

        /* readme contents are base64 encoded so, firstly  we need to decode it and convert top html */
        const decodedReadMeContent = this.renderMarkDown(data?.content);
        const md = new Remarkable({table: true});
        this.readMeContent = md.render(decodedReadMeContent);
      });
  }

  renderMarkDown(md) {
    return Base64.decode(md);
  }


}
