import { Component, OnInit, Optional, Inject, ViewChild, ElementRef, PLATFORM_ID, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { Constants } from './modules/util/constants';
import { ItemsService } from './modules/util/items.service';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	titleName: any;
	isHome: boolean = true;
	year: any;
	showNavFooter: boolean = true;


	constructor(
		public router: Router, private itemsService: ItemsService,
		@Inject(DOCUMENT) private dom: any,
		@Inject(PLATFORM_ID) private platformId: any) {
		this.getTitle();
	}

	ngOnInit(): void {
		this.year = new Date().getFullYear();
		console.log('app ng oninit ' + this.router.url);
	}

	getTitle() {

		let responseObs = this.itemsService.loadTitleFile();
		responseObs.subscribe(response => {
			console.log('items file content = ' + JSON.stringify(response));
			this.titleName = response.title;

		},
			error => {
				console.log('file not found' + JSON.stringify(error));
			});
	}





}
