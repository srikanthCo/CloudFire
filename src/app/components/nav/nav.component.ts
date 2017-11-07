import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface User { name: string;email: string;mobile: string }

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  person = {
    name: "",
    email:"",
    mobile:""
  }

  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
  }
  addItem(user: User) {
    this.usersCollection.add(user).then(function(success){
      this.person.name = "";
      this.person.mobile = "";
      this.person.email = "";
    });
  }

  ngOnInit() {
  }

}
