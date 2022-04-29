import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Subject, Subscription } from 'rxjs';
import { NotFoundService } from './not-found.service';
import { Router, ActivatedRoute, ParamMap, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

	isHome: boolean = false;

	constructor(
		public router: Router,
		private meta: Meta,
		private titleService: Title,
		@Inject(DOCUMENT) private dom: any,

	) {
	}


	ngOnInit(): void {
		this.setMeta();
		if (this.router.url == '/home' || this.router.url == "/") {
			this.isHome = true;
		} else {
			this.isHome = false;
		}

	}
	setMeta() {
		this.titleService.setTitle('404 Not Found');
		this.meta.updateTag({ name: "description", content: 'Page Not found' });
		this.meta.updateTag({ name: "keywords", content: '404, not found' });
		this.meta.updateTag({ name: "robots", content: "noindex" });
		this.updateCanonicalUrl(this.dom.URL);
	}

	updateCanonicalUrl(url: string) {
		const head = this.dom.getElementsByTagName('head')[0];
		var element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null
		if (element == null) {
			element = this.dom.createElement('link') as HTMLLinkElement;
			head.appendChild(element);
		}
		element.setAttribute('rel', 'canonical')
		element.setAttribute('href', url)
	}

}