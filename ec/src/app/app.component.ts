import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Seneca Sells';
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products?paheSize=50').subscribe((Response:any)=>{
      console.log(Response);
  },error=>{
    console.log(error);
    
  }
    );
  }
  
}
