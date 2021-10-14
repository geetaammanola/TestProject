import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs/internal/Observable';
import { HttpClient , HttpErrorResponse, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { catchError , tap, map} from 'rxjs/operators'
import { throwError } from 'rxjs';
// import { HTTP } from '@ionic-native/http/ngx';

// const httpOptions = {
//   headers : new HttpHeaders({'content-Type' : 'application/json'})
// };




// this.headers.append('Content-Type','application/x-www-form-urlencoded');
// this.headers.append('Content-Type','application/json');

  const apiUrl = 'https://newsapi.org/v2/everything?q=all&from=2021-09-26&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98';

  // const apiUrl = ' https://randomuser.me/api/';    //test api , working
@Injectable({
  providedIn: 'root'
})
export class VisitorDataService {


  headers = new HttpHeaders({
    // 'Content-Type': 'application/json',
  });
  options = {
    headers: this.headers
  }
  constructor(protected http: HttpClient) {}
  // constructor(protected http: HTTP) {}
// Error Handling

private handleError(error : HttpErrorResponse){
  if(error.error instanceof ErrorEvent){
    console.error( 'an error accoured : ', error.error.message);
  }else{
console.error(  );
  }
  return throwError('Please try again later');
}

private getRes(res:Response){
  let body = res;
  return body || {} ;
}

getNewsData():Observable<any> {
  // this.options.headers.append('Content-Type', 'application/json');
    this.options.headers.append('Accept', 'application/json');
    // this.options.headers.append('Content-Type', 'application/x-www-form-urlencoded');
   
  return this.http.get(apiUrl,this.options).pipe(
    map(this.getRes),catchError(this.handleError)
  );
}




// new
// async getNewsData() {
//   try {
//     const url = 'https://newsapi.org/v2/everything?q=all&from=2021-09-26&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98';

//     // const url = 'https://api.example.com';
//     const params = {};
//     const headers = {}

//     const response = await this.http.get(url, params, headers);

//     console.log(response.status);
//     console.log(JSON.parse(response.data)); // JSON data returned by server
//     console.log(response.headers);

//   } catch (error) {
//     console.error(error.status);
//     console.error(error.error); // Error message as string
//     console.error(error.headers);
//   }



}
// }
