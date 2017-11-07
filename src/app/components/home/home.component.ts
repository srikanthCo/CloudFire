import { Component, OnInit } from '@angular/core';
import {DbService} from '../../../app/services/db.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private db: DbService) {
  
  }

  ngOnInit() {
  }

}
