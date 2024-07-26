import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
// property to communication to pages-list ( child component)
  pages = [{}];

// attached service to app component
constructor(private wikipedia : WikipediaService){

}

  // Adding as part of child to parent communication
  onTerm(term: string){    
    this.wikipedia.search(term).subscribe(pages => {
      this.pages = pages;
    });
  }
}
