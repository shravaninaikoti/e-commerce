import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { Event } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  name = 'Get Current Url Route Demo';
  currentRoute: string;
  constructor(private router: Router) {
    /*console.log(router.url);
    router.events.filter(event => Event instanceof NavigationEnd)
          .subscribe((event:Event )=> 
           {
            if(event instanceof NavigationEnd ){
              console.log(event.url);
            }
           });*/
   }

  ngOnInit(): void {
  }

}
