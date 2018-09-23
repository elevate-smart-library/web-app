import { Component, AfterViewInit } from '@angular/core';
import { ApiServices } from '../services/http-services';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

declare const google: any;
interface Marker {
	lat: number;
	lng: number;
	label?: string;
	draggable?: boolean;
}
interface Library {
	contacts: User[];
	id: string;
	location: {
		address: string
		lat: number
		lng: number
	};
	name: string;
	type: LibraryTypeEnum;
}
interface User {
	birthDate: string;
	email: string;
	firstName: string;
	id: string;
	language: string;
	lastName: string;
	location: string;
	phoneNumber: string;
}

enum LibraryTypeEnum {
	PUBLIC, STATION, HOME
}
@Component({
	selector: 'app-maps',
	templateUrl: './maps.component.html',
	styleUrls: ['./maps.component.css'],
	providers: [ApiServices]
})
export class MapsComponent implements AfterViewInit {
	libraries$: Observable<any>;
	map;
	markerTemp = [];
	polys = [];
	isLoaded = false;
	styleJson = [
		{
			'featureType': 'administrative.land_parcel',
			'elementType': 'labels',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'featureType': 'poi',
			'elementType': 'labels.text',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'featureType': 'poi.business',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'featureType': 'poi.medical',
			'elementType': 'labels.icon',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'featureType': 'road',
			'elementType': 'labels.icon',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'featureType': 'road.local',
			'elementType': 'labels',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'featureType': 'transit',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		}
	]

	constructor(private apiService: ApiServices, private router: Router) {
		this.apiService.fetchLibraries().subscribe(lib => {
			lib.map(library => {
				const geo = library.location;
				const latLng = new google.maps.LatLng(geo.lat, geo.lng);
				const id = library.name;
				if (this.map) {
					this.setMarker([latLng, id]);
				} else {
					this.markerTemp.push([latLng, id]);
				}
			});
		});
		this.apiService.fetchMapPolys().subscribe(polys => {
			for (const key in polys) {
				if (polys.hasOwnProperty(key)) {
					if (this.map) {
						// this.setPolyGons(polys[key]);
					} else {
						this.polys.push(polys[key]);
					}
				}
			}

		});
	}

	ngAfterViewInit() {
		if (!this.isLoaded) {
			const myLatlng = new google.maps.LatLng(43.6690207, -79.3916043);
			const mapOptions = {
				zoom: 13,
				center: myLatlng,
				scrollwheel: false,
				styles: this.styleJson
			};
			this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
			this.markerTemp.map(marker => {
				this.setMarker(marker);
			});
			// this.polys.map(poly => {
			// 	this.setPolyGons(poly)
			// });
			this.isLoaded = true;
		}
	}

	setMarker(marker) {
		const Marker = new google.maps.Marker({
			position: marker[0],
			title: marker[1],
			icon: 'https://elevate-smart-library.appspot.com/img/pin.png'
		});
		Marker.setMap(this.map);
		google.maps.event.addListener(Marker, 'click', (() => this.router.navigate(['/dashboard', marker[1]])));
	}

	setPolyGons(poly) {
		const gCoords = [];

		poly.BoundaryCoords.map(tCoords => {
			gCoords.push(new google.maps.LatLng(tCoords[0], tCoords[1]));
		});
		const bermudaTriangle = new google.maps.Polygon({
			paths: gCoords,
			strokeColor: '#2394AE',
			strokeOpacity: 0.2,
			strokeWeight: 3,
			fillColor: '#6dc8d7',
			fillOpacity: 0.1
		});
		bermudaTriangle.setMap(this.map);
	}
}
