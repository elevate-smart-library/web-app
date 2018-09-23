import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
	// moduleId: module.id,
	selector: 'navbar-cmp',
	templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit, OnDestroy {
	private listTitles: any[];
	location: Location;
	private toggleButton: any;
	private sidebarVisible: boolean;
	sub;
	id: string;

	constructor(location: Location, private element: ElementRef, private route: ActivatedRoute) {
		this.location = location;
		this.sidebarVisible = false;
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
	ngOnInit() {
		this.listTitles = ROUTES.filter(listTitle => listTitle);
		const navbar: HTMLElement = this.element.nativeElement;
		this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
	}
	sidebarOpen() {
		const toggleButton = this.toggleButton;
		const body = document.getElementsByTagName('body')[0];
		setTimeout(function () {
			toggleButton.classList.add('toggled');
		}, 500);
		body.classList.add('nav-open');

		this.sidebarVisible = true;
	};
	sidebarClose() {
		const body = document.getElementsByTagName('body')[0];
		this.toggleButton.classList.remove('toggled');
		this.sidebarVisible = false;
		body.classList.remove('nav-open');
	};
	sidebarToggle() {
		if (this.sidebarVisible === false) {
			this.sidebarOpen();
		} else {
			this.sidebarClose();
		}
	};

	getTitle() {
		let titlee = this.location.prepareExternalUrl(this.location.path());
		titlee = titlee.split('/').pop();
		this.sub = this.route.firstChild ? this.route.firstChild.params.subscribe(params => {
			this.id = params['library'] ? ' - ' + params['library'] : null;
		}) : null;
		for (let item = 0; item < this.listTitles.length; item++) {
			if (this.listTitles[item].path === titlee) {
				return this.listTitles[item].title;
			}
		}
		return 'Dashboard';
	}
}
