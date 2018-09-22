import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable()
export class AccountService {
	baseUrl = 'http://someurl.com'
	constructor(
		private appHttp: HttpClient,
	) { }

	fetchLibraries() {
		return this.appHttp.get(this.baseUrl);
	}
}
