import { details } from './interface';
import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment5';
  detail:details[];
  constructor(private apiService:ApiserviceService,private http:HttpClient){
  }
  public getval(){
    this.apiService.getadmin().subscribe((response)=>{
      console.log('response recieve')
      console.log(response)
       this.detail=(response);
    })
  }
}
