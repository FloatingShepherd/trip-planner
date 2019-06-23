import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Services {

  constructor(
      private httpClient:HttpClient
  ) { }

  public auth(credentials$:Observable<any>) {
    return credentials$.pipe(
        switchMap((credentials:any) => {
            return this.httpClient.post('localhost:3000/auth', {
                userId: credentials.username,
                password: credentials.password
            })
        })
    );
  }

}