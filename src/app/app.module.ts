import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AuthService} from './services/auth.service';
import {DbService} from './services/db.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CrudComponent } from './components/crud/crud.component';
import { UpdateComponent } from './components/update/update.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ExpComponent } from './components/exp/exp.component';
import { CartComponent } from './components/cart/cart.component';

import { FilterPipe } from './pipes/filter.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { ProductsComponent } from './components/products/products.component';
import { UpdateCatLogComponent } from './components/update-cat-log/update-cat-log.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ShopComponent } from './components/shop/shop.component';
import { BrandComponent } from './components/brand/brand.component';
import { AddShopComponent } from './components/add-shop/add-shop.component';
import { EditShopComponent } from './components/edit-shop/edit-shop.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';


const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'crud',component: CrudComponent},
  {path:'update',component: UpdateComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'exp',component:ExpComponent},
  {path:'cart',component:CartComponent},
  {path:'subcategory',component:SubCategoryComponent},
  {path:'products',component:ProductsComponent},
  {path:'updatecatlog',component:UpdateCatLogComponent},
  {path:'addproducts',component:AddProductsComponent},
  {path:'addshop',component:AddShopComponent},
  {path:'shop',component:ShopComponent},
  {path:'brand',component:BrandComponent},
  {path:'editshop/:id',component:EditShopComponent},
  {path:'editproducts',component:EditProductsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudComponent,
    UpdateComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
    CategoriesComponent,
    ExpComponent,
    FilterPipe,
    CartComponent,
    TruncatePipe,
    SubCategoryComponent,
    ProductsComponent,
    UpdateCatLogComponent,
    AddProductsComponent,
    ShopComponent,
    BrandComponent,
    AddShopComponent,
    EditShopComponent,
    EditProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [DbService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
