import { Component, OnInit } from '@angular/core';
import {DbService} from '../../../app/services/db.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
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

  data: Observable<any[]>;
  constructor(private db: DbService) {
   db.getCategories().subscribe(val => {
     this.items = val;
   }); 
  }

  // getCategories(){
  //   console.log("categories")
  // }

  // getsubCategories(){
  //   console.log("sub categories")
  // }

  ngOnInit() {
    this.subcategory = [];
    }

  // check() {
  //   this.series = [];
  //   console.log("category",this.category,this.type);
  //   this.db.getsubcategories(this.category).subscribe(val => {
  //     this.subitems = val;
  //     if(!_.isEmpty(this.subitems)) {
  //       this.sub= true;
  //       this.series.push(this.subitems);
  //       console.log("series",this.series,"subitems",this.subitems)
  //     }
  //   });
  // }

  check() {
    console.log("category",this.category,this.type);
    this.db.getDocument(this.category).subscribe(val => {
      this.subitems = val;
      if(!_.isEmpty(this.subitems)) {
        console.log("subitems",this.subitems)
      }
    });
  }

  add(){
    var path = {
      name: this.category,
      slug: this.category
    }
    var ansisters = this.subitems.ansisters;
    ansisters[this.category] = path;
    var doc = {
      ansisters: ansisters,
      name: this.name,
      id: this.name.replace(/ /g,'').toLowerCase(),
      slug: this.name.replace(/ /g,'').toLowerCase(),
      parentid: this.category,
      isProduct: false,
      catlog: this.subitems.catlog
    }
    console.log("name,category,doc",this.name,this.category,doc);
    this.db.addDoc(doc);
  }


}
