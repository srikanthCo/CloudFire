import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {DbService} from '../../../app/services/db.service';
import { Observable } from 'rxjs/Observable';
import {FilterPipe} from '../../../app/pipes/filter.pipe';
import {TruncatePipe} from '../../../app/pipes/truncate.pipe';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {
  name: string;
  slug:string;
  latitude:string;
  longitude:string;
  timings:string;
  holidays:string;
  apikeys:string;
  cod:string;
  currency:string;
  address:string;
  cname:string;
  number:string;
  code:string;
  email:string;
  smtp: string;
  image: any;
  catlog: any;
  description:string;


  constructor(private db: DbService) {
    db.getCatlog().subscribe(val => {
      this.catlog = val;
    });
  }

  ngOnInit() {
  }
  addShop(){
    var parent = {};
    this.catlog.forEach(element => {
      if(element.check){
        parent[element.id] = element.check;
      }
    }); 
    console.log("parent",parent)
    var doc = {
      name: this.name,
      id: this.name.replace(/ /g,'').toLowerCase(),
      slug: this.name.replace(/ /g,'').toLowerCase(),
      catlog: parent,
      description: this.description,
      latitude: this.latitude,
      longitude: this.longitude,
      cname: this.cname,
      email: this.email,
      number: this.number,
      address: this.address,
      holidays: this.holidays,
      timings: this.timings,
      apikeys: this.apikeys,
      cod: this.cod,
      currency: this.currency,
      code: this.code,
      smtp: this.smtp
    }
    console.log("sub name,doc",this.name,doc);
    this.db.setShopDoc(doc);
  }

}
