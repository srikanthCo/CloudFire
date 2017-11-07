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

const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'crud',component: CrudComponent},
  {path:'update',component: UpdateComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'exp',component:ExpComponent},
  {path:'cart',component:CartComponent}
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
    TruncatePipe
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
