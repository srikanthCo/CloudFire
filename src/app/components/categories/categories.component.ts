import { Component, OnInit } from '@angular/core';
import {DbService} from '../../../app/services/db.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import * as firebase from 'firebase';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  sub: boolean=false;
  keys: any;
  subitems: any;
  items: any;
  show: boolean=false;

  data: Observable<any[]>;
  constructor(private db: DbService) {
   db.getParent().subscribe(val => {
     this.items = val;
   }); 

  
  }

  ngOnInit() {
  }

  getCat(id) {
    this.sub = false;
    console.log("id",id);
    // this.items = this.db.getCategory(id);
    this.db.getCategory(id)
  }

  getCategories() {
    this.sub = false;
    this.show = false;
    this.db.getParent().subscribe(val => {
      this.items = val;
    });
  }

  getSubCat(subCat) {
    console.log("subCat",subCat);
    if(subCat == "noodles"){
      this.show = true;
    }else{
      this.show = false;
    }
    this.db.getchild(subCat).subscribe(val => {
      this.subitems = val;
      if(!_.isEmpty(this.subitems)) {
        this.sub= true;
        this.keys = Object.keys(this.subitems[0].ansisters);
        console.log("subitems",this.subitems);
        this.subitems.forEach(element => {
          if(element.path){
            let storageRef = firebase.storage().ref();
            console.log("element",element);
            let spaceRef = storageRef.child(element.path).getDownloadURL().then((url)=>{
              element.imageUrl = url;
              console.log("element",element);
            }).catch((Error)=>{
              console.log(Error);
            }); 
          }       
        });
      }else {
        this.subitems = [];
      }
    });
  }
}
