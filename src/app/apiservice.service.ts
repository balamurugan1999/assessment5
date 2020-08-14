import { details } from './interface';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
   url:string="http://localhost:5000/user/";
   url1:string="http://127.0.0.1:5000/admin";
  constructor(private http:HttpClient) { 
  }
  
  public getuser(username:string) :Observable<any>{
    return this.http.get(this.url+username);
  } 
  public postuser(username:string):Observable<any>
  {
    return this.http.post(this.url+username,null);
  }
  public getadmin():Observable<any> {
    return this.http.get(this.url,null);
  } 
}
