import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CommunicateService {

  constructor(private http: Http) { }
getHand(): any {
    return this.http.get('http://localhost:4300/public/simple')
    .map(res => res.json())
  }
}
