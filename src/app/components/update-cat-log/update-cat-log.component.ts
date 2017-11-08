import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-cat-log',
  templateUrl: './update-cat-log.component.html',
  styleUrls: ['./update-cat-log.component.css']
})
export class UpdateCatLogComponent implements OnInit {
interval:number = 3000; //ms
items:any;
  
  constructor() {
  }
  
  ngOnInit() {
    this.items = [
      {
        "name": "soap",
        "space":[
        ],
      },
      {
        "name": "mug",
        "space":[
          {}
        ],
      },
      {
        "name": "jug",
        "space":[
          {},
          {}
        ],
      },
      {
        "name": "hug",
        "space":[],
      }
    ]
      

    
    setInterval(function() {
      //To demonstrate binding FROM Model TO View
      this.checkboxFlag = !this.checkboxFlag;
    }, 3000);
  }

}
