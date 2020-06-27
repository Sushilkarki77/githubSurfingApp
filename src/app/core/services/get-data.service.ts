import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from '../interfaces/search-result';

const apiEndPoint = environment.apiEndPoint;


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getPublicRepositories(queryParameter): Observable<SearchResult> {
    return this.http.get<SearchResult>(apiEndPoint + `search/repositories?` + queryParameter);
  }
  

}
