import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CrmBlackRock';
  showMenu = true;
  routsMenu = ['/home', '/customers'];
  constructor(private route: Router) {
    this.route.events.subscribe((res: any) => {
      if (res.url === '/login'){
        console.log(res)
        //this.showMenu = true;
      }
    });
  }
}
