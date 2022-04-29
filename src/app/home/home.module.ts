import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ComputerItemsComponent } from '../modules/computer-items/computer-items.component'


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HomeRoutingModule
	],
	exports: [
		HomeComponent
	],
	declarations: [
		HomeComponent,
    ComputerItemsComponent
	],
	providers: [],
})
export class HomeModule { }
