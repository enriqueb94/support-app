import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact'
import { Global } from './global.service';

@Injectable()

export class ContactService {
  public url : string;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = Global.url;
  }

  	saveMessage(contact: Contact): Observable<any>{
		let params = JSON.stringify(contact);
		//console.log(params);
		let headers = new HttpHeaders().set('content-type','application/json');

		return this._http.post(this.url+'save-message', params, {headers: headers});
	}

	getMessages(): Observable<any>{
		let headers = new HttpHeaders().set('content-type','application/json');
		
		return this._http.get(this.url+'messages',{headers: headers});
	}

	getMessage(id: any): Observable<any>{
		let headers = new HttpHeaders().set('content-type','application/json');

		return this._http.get(this.url+'message/'+id, {headers: headers});
	}
}
