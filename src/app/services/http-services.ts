import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiServices {
	baseUrl = 'https://elevate-smart-library.appspot.com/api/v1/';

	constructor(
		private appHttp: HttpClient,
	) { }

	fetchLibraries(): Observable<any> {
		const path = this.baseUrl + 'libraries';
		return this.appHttp.get(path);
	}

	fetchBooks(): Observable<any> {
		const path = this.baseUrl + 'books';
		return this.appHttp.get(path);
	}

	fetchMapPolys(): Observable<any> {
		const path = 'http://api.artifaktdev.ca/polys/';
		return this.appHttp.get(path);
	}

	fetchEvents(): Observable<any> {
		const events = localStorage.getItem('events');
		const path = 'https://opendata.tpl.ca/resources/events';
		if (events) {
			return Observable.of(JSON.parse(events));
		} else {
			return this.appHttp.get<any[]>(path).pipe(
				map(response => {
					if (response instanceof Array ) {
						const parsed = response.slice(0, 6);
						const string = JSON.stringify(parsed);
						localStorage.setItem('events', string);
						return response;
					}
				})
			);
		}
	}
}
