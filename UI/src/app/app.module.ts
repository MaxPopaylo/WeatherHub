import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDataComponent } from './views/count-data/count-data.component';
import {DataTablesModule} from "angular-datatables";
import { MeasurementsComponent } from './views/measurements/measurements.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { GeneratorPageComponent } from './pages/generator-page/generator-page.component';
import {RouterModule} from "@angular/router";
import { MainInfoPageComponent } from './pages/main-info-page/main-info-page.component';
import { AdminTableComponent } from './views/admin-table/admin-table.component';
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgOptimizedImage} from "@angular/common";
import {NgxSpinnerModule} from "ngx-spinner";
import {LoadingInterceptor} from "./interceptors/loading";

const routes = [
  {path: '', component: MainInfoPageComponent},
  {path: 'charts',  loadChildren: () => import('./charts/modul/charts/charts.module').then(m => m.ChartsModule) },
  {path: 'admin', component: AdminPageComponent},
  {path: 'generator', component: GeneratorPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CountDataComponent,
    MeasurementsComponent,
    AdminPageComponent,
    GeneratorPageComponent,
    MainInfoPageComponent,
    AdminTableComponent
  ],
    imports: [
        BrowserModule,
        DataTablesModule,
        RouterModule.forRoot(routes),
        MatButtonModule,
        FormsModule,
        HttpClientModule,
        BsDropdownModule,
        BrowserModule,
        BrowserAnimationsModule,
        NgOptimizedImage,
        NgxSpinnerModule,
        ReactiveFormsModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  exports: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
