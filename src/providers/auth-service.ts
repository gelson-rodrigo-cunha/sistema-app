import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/map';


let apiUrls = 'http://localhost/sistema/public/api/login';
let apiUrl = 'http://localhost/sistema/public/api/'; 


/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  constructor(public http: Http) {
    console.log('Service Provider');
  }

	/* getData() {
            return this.http.get('http://localhost:8000/noticias').map(res=>res.json())
      }  
	  */
  postData(credentials, type){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
    //  this.http.post(apiUrl+type, JSON.stringify(credentials), {headers: headers}).
	  this.http.post(apiUrl+type, credentials, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }
  /*
   getDatasss(credentials){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
    //  this.http.post(apiUrl+type, JSON.stringify(credentials), {headers: headers}).
	  this.http.get('http://localhost:8000/noticias', credentials, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }
  */
 postDatas(credentials){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post(apiUrls, credentials, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }

}
