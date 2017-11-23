import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {DbService} from '../../../app/services/db.service';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { Observable } from 'rxjs/Observable';
import {FilterPipe} from '../../../app/pipes/filter.pipe';
import {TruncatePipe} from '../../../app/pipes/truncate.pipe';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.css']
})
export class EditShopComponent implements OnInit {
  id:any;
  name: string;
  search: string;
  catlog: any;
  description:string;
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
  slug:string;
  item: any;

  constructor(private db: DbService,private router: Router,private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    console.log("id",this.id);
    db.getCatlog().subscribe(val => {
      this.catlog = val;
    });
    db.getShopDocument(this.id).subscribe(val => {
      this.item = val;
    })
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
