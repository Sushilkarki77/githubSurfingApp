import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { RepoSummary } from '../interfaces/repo-summary';

const apiEndPoint = environment.apiEndPoint;


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getPublicRepositories(): Observable<RepoSummary[]> {
    return this.http.get<RepoSummary[]>(apiEndPoint + 'repositories');
  }

}
