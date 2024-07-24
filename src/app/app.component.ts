import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
// attached service to app component
constructor(private wikipedia : WikipediaService){

}

  // Adding as part of child to parent communication
  onTerm(term :string){
    //const results = this.wikipedia.search(term);
    //console.log ( 'The service results are : ' + results);
    this.wikipedia.search(term).subscribe( (response) => {
      console.log ( response);
    });
  }
}
