import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {DbService} from '../../../app/services/db.service';
import { Observable } from 'rxjs/Observable';
import {FilterPipe} from '../../../app/pipes/filter.pipe';
import {TruncatePipe} from '../../../app/pipes/truncate.pipe';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  sub: boolean=false;
  keys: any;
  subitems: any;
  items: any;
  category: any;
  type: boolean = false;
  subcategory: any[];
  series: any[];
  color:string = 'red';
  name: string;
  add:boolean=false;
  search: string;
  catlog: any;
  catlogname: string;
  hasProduct: boolean;
  PCategories: any;
  Pname: string;
  slug:string;
  status:string;
  index: string;

  constructor(private db: DbService) {
    db.getProducts().subscribe(val => {
      this.items = val;
    }); 
    db.getCatlog().subscribe(val => {
      this.catlog = val;
    });
  }

  ngOnInit() {
  }

  getcat(){
    console.log("hello");
    this.category = null;
    this.PCategories = null;
    this.db.getCatlogCategories(this.catlogname).subscribe(val => {
      console.log("val",val);
      this.PCategories = val;
      this.segregate();
    });
  }

  segregate(){
    var dup = [];
    for(let i=0; i<this.PCategories.length;i++){
      this.PCategories[i].space = [];
      for(let j=0;j<Object.keys(this.PCategories[i].ansisters).length;j++){
        this.PCategories[i].space.push({});
      }
    }
    for(let k=0;k<this.PCategories.length;k++){
      if(Object.keys(this.PCategories[k].ansisters).length == 0){
        dup.push(this.PCategories[k]);
      }
    }
    for(let i=0; i<dup.length;i++){
        for(let j =0;j<this.PCategories.length;j++){
          if(dup[i].id==this.PCategories[j].parentid){
            dup.splice(i+1,0,this.PCategories[j]);
          }
        }
    }
    this.PCategories = dup;
  }

  edit(item,i) {
    this.index = i;
    this.name = item.name;
    this.slug = item.slug;
    this.status = item.status;
  }

  open(){
    this.add = true;
  }

  close(){
    this.add = false;
  }

  update(){
    var item= this.items[this.index];
    item.selected = false;
    if(item.parentid != item.indexing[item.indexing.length-1]){
      console.log("item value",item.indexing[item.indexing.length-1]);
      delete item.ansisters[item.indexing[item.indexing.length-1]];
      item.ansisters[item.parentid] = {
        name: item.parentid,
        slug: item.parentid
      }
      item.indexing = Object.keys(item.ansisters);
    }
    console.log("item",item);

    this.db.updateDoc(item);
  }

  delete(item){
    this.db.deleteDoc(item);
  }

  check() {
    console.log("category",this.category,this.type);
    this.db.getDocument(this.category).subscribe(val => {
      this.subitems = val;
      if(!_.isEmpty(this.subitems)) {
        console.log("subitems",this.subitems);
      }
    });
  }

  addSubCategory(){
    var path = {
      name: this.category,
      slug: this.category
    }
    console.log("sub ans",this.subitems.ansisters,this.hasProduct)
    var ansisters = this.subitems.ansisters;
    ansisters[this.category] = path;
    var doc = {
      ansisters: ansisters,
      name: this.name,
      id: this.name.replace(/ /g,'').toLowerCase(),
      slug: this.name.replace(/ /g,'').toLowerCase(),
      parentid: this.category,
      isProduct: false,
      hasProduct: this.hasProduct,
      catlog: this.subitems.catlog
    }
    console.log("sub name,category,doc",this.name,this.category,doc);
    this.db.addDoc(doc);
  }

  addCategory(){
    var doc = {
      ansisters: {},
      name: this.name,
      id: this.name.replace(/ /g,'').toLowerCase(),
      slug: this.name.replace(/ /g,'').toLowerCase(),
      parentid: null,
      isProduct: false,
      catlog: this.catlogname
    }
    console.log("category name,category,doc",this.name,this.category,doc);
    this.db.addDoc(doc);
  }

  addProduct(){
    var path = {
      name: this.category,
      slug: this.category
    }
    var parent = {};
    this.PCategories.forEach(element => {
      if(element.check){
        parent[element.id] = element.check;
      }
    });
    console.log("parent",parent)
    // var ansisters = this.subitems.ansisters;
    // ansisters[this.category] = path;
    var doc = {
      name: this.name,
      id: this.name.replace(/ /g,'').toLowerCase(),
      slug: this.name.replace(/ /g,'').toLowerCase(),
      categoryid: parent,
      isProduct: true,
      catlog: this.catlogname
    }
    console.log("sub name,category,doc",this.name,this.category,doc);
    console.log("html",(<HTMLInputElement>document.getElementById('image')).files[0])
    this.db.addProduct(doc);
  }

}
