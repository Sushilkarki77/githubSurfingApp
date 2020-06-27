import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  searchKey: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToSearchResultPage(key): void {
    if (key && key.trim()) { this.router.navigate(['search'], { queryParams: { searchKey: key } }); }
  }

}
