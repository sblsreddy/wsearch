import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  // property to hold the search term before searching it
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
