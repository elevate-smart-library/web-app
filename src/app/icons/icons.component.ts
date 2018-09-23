import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../services/http-services';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-icons',
	templateUrl: './icons.component.html',
	styleUrls: ['./icons.component.css'],
	providers: [ApiServices]
})
export class IconsComponent implements OnInit {

	bookList$: Observable<any>;

	constructor(private apiService: ApiServices) {
		this.bookList$ = this.apiService.fetchBooks();
	}

	ngOnInit() {
	}

}
