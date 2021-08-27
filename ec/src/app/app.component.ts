import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,NavigationEnd  } from '@angular/router';
import { Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Products catalogue';
  name = 'Get Current Url Route Demo';
  currentRoute: string;
  constructor(private http: HttpClient,private router: Router){
    
    router.events.filter(event => Event instanceof NavigationEnd)
          .subscribe((event:Event )=> 
           {
            if(event instanceof NavigationEnd ){
              this.currentRoute = event.url; 
              console.log(event);
            }
           });
  }
  ngOnInit(): void {
  /* this.http.get('https://localhost:5001/api/products?paheSize=50').subscribe((Response:any)=>{
      console.log(Response);
  },error=>{
    console.log(error);
    
  }
    );*/
  }
  
}
