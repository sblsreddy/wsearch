import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
// property to communication to pages-list ( child component)
  pages = [];

// attached service to app component
constructor(private wikipedia : WikipediaService){

}

  // Adding as part of child to parent communication
  onTerm(term :string){
    //const results = this.wikipedia.search(term);
    //console.log ( 'The service results are : ' + results);
    this.wikipedia.search(term).subscribe( (response : any) => {
      console.log ( response);
      this.pages = response.query.search;
    });
  }
}
