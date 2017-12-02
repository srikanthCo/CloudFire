import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class DbService {
  folder:any;

  items: Observable<any[]>;
  itemDoc: Observable<any>;
  shopDoc: Observable<any>;
  private itemsCollection: AngularFirestoreCollection<any>;
  private catlogCollection: AngularFirestoreCollection<any>;
  private shopCollection: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.folder = 'images';
    const query = "parentid";
    this.items = db.collection('categories', ref => ref.where(query, '==', null)).valueChanges();
    this.itemsCollection = db.collection('categories');
    this.catlogCollection = db.collection('catlog');
    this.shopCollection = db.collection('shops');
  }

  getCatlog(){
    return this.db.collection('catlog').valueChanges();
  }

  getShop(){
    return this.shopCollection.valueChanges();
  }

  getCategories(){
    const query = "parentid";
    return this.db.collection('categories', ref => ref.where(query, '==', null)).valueChanges();
  }

  getAllCategories(){
    const query = "isProduct";
    return this.db.collection('categories', ref => ref.where(query, '==', false)).valueChanges();;
  }

  getProducts(){
    const query = "isProduct";
    return this.db.collection('categories', ref => ref.where(query, '==', true)).valueChanges();;
  }

  getParent(){
    const query = "parentid";
    return this.db.collection('categories', ref => ref.where(query, '==', null)).valueChanges();
  }

  getCategory(id){
    const query = "catlog";
    return this.db.collection('categories', ref => ref.where(query, '==', id).where('parentid','==',null)).valueChanges();
  }

  getCatlogCategories(id){
    const query = "catlog";
    return this.db.collection('categories', ref => ref.where(query, '==', id).where('isProduct','==',false)).valueChanges();;
  }

  getsubcategories(id) {
    const query = "parentid";
    return this.db.collection('categories').valueChanges();
  }

  getchild(id) {
    const query = "parentid";
    return this.db.collection('categories', ref => ref.where(query, '==', id)).valueChanges();
  }

  getDocument(id){
    var query = 'categories/'+id;
    return this.db.doc(query).valueChanges();
  }
  getShopDocument(id){
    var query = 'shops/'+id;
    return this.db.doc(query).valueChanges();
  }
  addDoc(item) {
    const query = item.id;
    if(item.catlog){
      this.itemsCollection.doc(query).set(item);
    }else{
    this.catlogCollection.doc(query).set(item);
    }
  }

  addShop(item) {
    const query = item.id;
    this.shopCollection.doc(query).set(item);
  }

  updateDoc(item){
    const query = item.id;
    this.itemsCollection.doc(query).update(item);
  }

  deleteDoc(item){
    const query = item.id;
    this.itemsCollection.doc(query).delete();
  }
  deleteShopDoc(item){
    const query = item.id;
    this.shopCollection.doc(query).delete();
  }

  addProduct(doc){
    setTimeout(()=>{
      console.log("html",(<HTMLInputElement>document.getElementById('image')).files[0])
      // Create root ref
      let storageRef = firebase.storage().ref();
      for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
        console.log("selectedFile",selectedFile)
        let path = `/${this.folder}/${selectedFile.name}`;
        let iRef = storageRef.child(path);
        iRef.put(selectedFile).then((snapshot) => {
          doc.image = selectedFile.name;
          doc.path = path;
          this.addDoc(doc);
        });
      }
    },1000);
    console.log("html out",(<HTMLInputElement>document.getElementById('image')).files[0]);
  }
  setShopDoc(doc){
    setTimeout(()=>{
      console.log("html",(<HTMLInputElement>document.getElementById('image')).files[0])
      // Create root ref
      let storageRef = firebase.storage().ref();
      for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
        console.log("selectedFile",selectedFile)
        let path = `/${this.folder}/${selectedFile.name}`;
        let iRef = storageRef.child(path);
        iRef.put(selectedFile).then((snapshot) => {
          doc.image = selectedFile.name;
          doc.path = path;
          this.addShop(doc);
        });
      }
    },1000);
    console.log("html out",(<HTMLInputElement>document.getElementById('image')).files[0]);
  }


}
