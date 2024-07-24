import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  // Adding as part of child to parent communication logic, we are trying to send term to app component
  @Output() submitted = new EventEmitter<string>();

  // property to hold the search term before searching it
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Form submission event handled
  onFormSubmit(event : any){

    event.preventDefault();  // this is disabling browser handling form submit event
    
    this.submitted.emit(this.term);   // Adding as part of child to parent communication 
  }

}
