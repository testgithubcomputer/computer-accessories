import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ItemsService {
	computerItems:any;

	constructor(private httpClient: HttpClient) {

	}

	loadItemsFile():Observable<any> {
		let headers = new HttpHeaders().set("Content-Type", "application/json");
		//.set("Authorization", token);
    var url = 'assets/data/Items.json';
		return this.httpClient.get(url,{headers:headers});
	}

	saveItemsFileContent(items:any) {
		this.computerItems = items;
	}

	getItemsFileContent() {
		return this.computerItems;
	}

  loadTitleFile():Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
		//.set("Authorization", token);
    var url = 'assets/data/title.json';
		return this.httpClient.get(url,{headers:headers});
	}

}



