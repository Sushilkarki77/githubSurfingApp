import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { RepoSummary } from 'src/app/core/interfaces/repo-summary';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
