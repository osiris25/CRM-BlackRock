import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrmBlackRock';
  showMenu = false;
  routsMenu = ['/home', '/customers']
  constructor( private route: Router ) {
      this.route.events.subscribe((res:any)  => {
       //console.log(res.RoutesRecognized.url);
        console.log(this.routsMenu.indexOf(res.url));
        
        if (res.url && this.routsMenu.indexOf(res.url) > -1){

          this.showMenu = true;
        }
      })
  }
  
}

