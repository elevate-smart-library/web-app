import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { Observable, Subject, Subscription } from 'rxjs';
import { ApiServices } from '../services/http-services';
import { WebsocketService } from '../services/websocket-services';

interface SearchResult {
	terms: string;
	browser: string;
}
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [ApiServices, WebsocketService]
})
export class HomeComponent implements OnInit, OnDestroy {
	public emailChartType: ChartType;
	public emailChartData: any;
	public emailChartLegendItems: LegendItem[];

	public hoursChartType: ChartType;
	public hoursChartData: any;
	public hoursChartOptions: any;
	public hoursChartResponsive: any[];
	public hoursChartLegendItems: LegendItem[];

	public activityChartType: ChartType;
	public activityChartData: any;
	public activityChartOptions: any;
	public activityChartResponsive: any[];
	public activityChartLegendItems: LegendItem[];

	libEvents$: Observable<any>;
	liveSearches$;
	liveSearch = [];

	constructor(private apiService: ApiServices, private webSocket: WebsocketService) {
		this.libEvents$ = this.apiService.fetchEvents();
		this.liveSearches$ = this.webSocket
		.connect('ws://dashboard.tpllabs.ca:4571/rtsearches')
		.subscribe((response: MessageEvent): SearchResult => {
			const data = JSON.parse(response.data);
			this.liveSearch.unshift(data[0]);
			return {
				terms: data[0].terms,
				browser: data[0].browser
			};
		});
	}

	ngOnInit() {
		console.log('hello')
		this.emailChartType = ChartType.Pie;
		this.emailChartData = {
			labels: ['45%', '49%', '6%'],
			series: [45, 49, 6]
		};
		this.emailChartLegendItems = [
			{ title: 'Books Out', imageClass: 'fa fa-circle text-info' },
			{ title: 'Books In', imageClass: 'fa fa-circle text-danger' },
			{ title: 'Books Missing', imageClass: 'fa fa-circle text-warning' }
		];

		this.hoursChartType = ChartType.Line;
		this.hoursChartData = {
			labels: ['7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM'],
			series: [
				[287, 385, 490, 492, 554, 586, 698, 695, 752],
				[67, 152, 143, 240, 287, 335, 435, 437, 530],
				[23, 22, 40, 43, 60, 40, 55, 40, 42]
			]
		};
		this.hoursChartOptions = {
			low: 0,
			high: 800,
			showArea: true,
			height: '245px',
			axisX: {
				showGrid: false,
			},
			lineSmooth: Chartist.Interpolation.simple({
				divisor: 3
			}),
			showLine: false,
			showPoint: false,
		};
		this.hoursChartResponsive = [
			['screen and (max-width: 640px)', {
				axisX: {
					labelInterpolationFnc: function (value) {
						return value[0];
					}
				}
			}]
		];
		this.hoursChartLegendItems = [
			{ title: 'Check Out', imageClass: 'fa fa-circle text-info' },
			{ title: 'Return', imageClass: 'fa fa-circle text-danger' },
			{ title: 'Report Issue', imageClass: 'fa fa-circle text-warning' }
		];

		this.activityChartType = ChartType.Bar;
		this.activityChartData = {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			series: [
				[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
				[412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
				[200, 230, 210, 220, 240, 230, 250, 200, 220, 178, 190, 195],
				[150, 176, 180, 160, 175, 150, 140, 190, 174, 160, 182, 150],
				[301, 350, 320, 310, 316, 320, 310, 300, 298, 300, 320, 330]
			]
		};
		this.activityChartOptions = {
			seriesBarDistance: 10,
			axisX: {
				showGrid: false
			},
			height: '245px'
		};
		this.activityChartResponsive = [
			['screen and (max-width: 640px)', {
				seriesBarDistance: 5,
				axisX: {
					labelInterpolationFnc: function (value) {
						return value[0];
					}
				}
			}]
		];
		this.activityChartLegendItems = [
			{ title: 'Horror', imageClass: 'fa fa-circle text-info' },
			{ title: 'Sci-Fi', imageClass: 'fa fa-circle text-danger' },
			{ title: 'Youth', imageClass: 'fa fa-circle text-success' },
			{ title: 'Romance', imageClass: 'fa fa-circle text-warning' },
			{ title: 'Non-Fiction', imageClass: 'fa fa-circle text-secondary' }
		];
	}

	ngOnDestroy() {
		this.liveSearches$.unsubscribe();
	}
}
