import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../util/items.service';




@Component({
  selector: 'app-computer-items',
  templateUrl: './computer-items.component.html',
  styleUrls: ['./computer-items.component.css']
})
export class ComputerItemsComponent implements OnInit {


  activeItems = new Array();
  deletedItems = [];
  groupCount = [];


  constructor(private itemsService: ItemsService) {
    this.loadComputerItmes();
  }

  ngOnInit(): void { }

  loadComputerItmes() {
    var content = this.itemsService.getItemsFileContent();
    let responseObs = this.itemsService.loadItemsFile();
    responseObs.subscribe(response => {
      console.log('items file content = ' + JSON.stringify(response));
      this.itemsService.saveItemsFileContent(response);
      this.activeItems = response;

    },
      error => {
        console.log('file not found' + JSON.stringify(error));
      });
  }

  onDelete(index) {
    console.log("clicked");
    this.deletedItems.push(this.activeItems[index]);
    if (index !== -1) {
      this.activeItems.splice(index, 1);

    }

  }

  onRestore(index) {
    console.log("clicked");
    this.activeItems.push(this.deletedItems[index]);
    if (index !== -1) {
      this.deletedItems.splice(index, 1);

    }

  }

  getTotalPrice(item) {

    var sum = 0;
    if (item && item.length > 0) {
      for (let i = 0; i < item.length; i++) {
        sum = sum + item[i].price;
      }
    }
    return sum;

  }

  getItemCount(item) {
    var result = {};
    for (var i = 0; i < item.length; ++i) {
      if (!result[item[i].type])
        result[item[i].type] = 0;
      ++result[item[i].type];
    }
    console.log("type" + JSON.stringify(result));
    let arr = [];
    Object.keys(result).map(function (key) {
      arr.push({ [key]: result[key] })
    });
    this.groupCount = arr;

  }

  getTypeName(name) {

    var k = Object.keys(name);
    var v = Object.values(name);
    return k + ' : ' + v;
  }





}
