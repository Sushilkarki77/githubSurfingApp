import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SearchResult } from '../interfaces/search-result';
import { RepoDetail } from '../interfaces/repo-detail';
import { RepoContent } from '../interfaces/repo-content';

const apiEndPoint = environment.apiEndPoint;


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getPublicRepositories(queryParameter): Observable<SearchResult> {
    return this.http.get<SearchResult>(apiEndPoint + `search/repositories?` + queryParameter);
  }

  getRepoDetail(title): Observable<RepoDetail> {
    return this.http.get<RepoDetail>(apiEndPoint + `repos/` + title);
  }

  getRepoReadMe(title): Observable<RepoContent> {
    return this.http.get<RepoContent>(apiEndPoint + `repos/` + title + `/contents/README.md`);
  }

}
