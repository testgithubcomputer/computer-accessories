import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{ path: '',  loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
	{ path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },

	// { path : '404',loadChildren: () => import('./modules/common/404/not-found.module').then(mod => mod.NotFoundModule)},
	{ path: '**', redirectTo: '/404', pathMatch: 'full' }

];


@NgModule({
   imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
	onSameUrlNavigation: 'reload',
	scrollPositionRestoration: 'top',
	scrollOffset: [0, 0],
    // Enable scrolling to anchors
    anchorScrolling: "enabled"
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }


