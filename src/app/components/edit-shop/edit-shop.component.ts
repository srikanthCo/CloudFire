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
  catlog: any;
  item: any;
  image:any;

  constructor(private db: DbService,private router: Router,private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    console.log("id",this.id);
    db.getCatlog().subscribe(val => {
      this.catlog = val;
    });
    db.getShopDocument(this.id).subscribe(val => {
      this.item = val;
      this.catlog.forEach(element => {
        if(this.item.catlog[element.id]== true){
          element.check = true;
        }else{
          element.check = false;
        }
      });
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
    this.item.catlog = parent;
    console.log("doc",this.item);
    this.db.setShopDoc(this.item);
  }

}
