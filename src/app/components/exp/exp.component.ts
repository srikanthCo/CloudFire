import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  chronological: number=1;

  constructor() { 
    // this.chronological = Math.floor(Math.random() * 4) + 1 ;
    console.log("random",this.chronological)
  }

  ngOnInit() {
  }

  touch(number){
    if(number == this.chronological){
      console.log("correct");
      this.chronological++;
      console.log("Next alphabet",this.chronological);
    }
    else{
      console.log("false");
    }
  }


}
