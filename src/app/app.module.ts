import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FormsModule} from '@angular/forms';
import { environment } from '../environments/environment';

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDesignComponent } from './components/product-design/product-design.component';
import { ProductDevelopmentComponent } from './components/product-development/product-development.component';
import { DesignValidationComponent } from './components/design-validation/design-validation.component';
import { TechnicalDocumentationComponent } from './components/technical-documentation/technical-documentation.component';
import { DesignAutomationComponent } from './components/design-automation/design-automation.component';
import { TrainingComponent } from './components/training/training.component';
import { PermenantRecruitmentComponent } from './components/permenant-recruitment/permenant-recruitment.component';
import { ContractAdministrationComponent } from './components/contract-administration/contract-administration.component';
import { PayrollAdministrationComponent } from './components/payroll-administration/payroll-administration.component';
import { ImplementationServiceComponent } from './components//implementation-service/implementation-service.component';
import { ProductsComponent } from './components/products/products.component';

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product-design',component:ProductDesignComponent},
  {path:'product-development',component:ProductDevelopmentComponent},
  {path:'design-validation',component:DesignValidationComponent},
  {path:'technical-documentation',component:TechnicalDocumentationComponent},
  {path:'design-automation',component:DesignAutomationComponent},
  {path:'training',component:TrainingComponent},
  {path:'permenant-recruitment',component:PermenantRecruitmentComponent},
  {path:'contract-administration',component:ContractAdministrationComponent},
  {path:'payroll-administration',component:PayrollAdministrationComponent},
  {path:'implementation-service',component:ImplementationServiceComponent},
  {path:'products',component:ProductsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ProductDesignComponent,
    ProductDevelopmentComponent,
    DesignValidationComponent,
    TechnicalDocumentationComponent,
    DesignAutomationComponent,
    TrainingComponent,
    PermenantRecruitmentComponent,
    ContractAdministrationComponent,
    PayrollAdministrationComponent,
    ImplementationServiceComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
