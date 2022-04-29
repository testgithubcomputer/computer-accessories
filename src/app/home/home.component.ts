import { Component, OnInit, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { Constants } from '../modules/util/constants';
//import { SeoService } from '@trilon/ng-universal';
import { Router, ActivatedRoute, ParamMap, RouterEvent, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title,

	@Inject(DOCUMENT) private dom: any,
	public router: Router,
//	private seo: SeoService,
   ) {

   }

	  ngOnInit(): void {

	  }


}
