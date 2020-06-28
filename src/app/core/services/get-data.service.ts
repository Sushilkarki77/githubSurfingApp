import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SearchResult } from '../interfaces/search-result';
import { RepoDetail } from '../interfaces/repo-detail';

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

  getContents(title): Observable<any> {
    return this.http.get<any>(apiEndPoint + `repos/` + title + `/contents`);
  }

}
