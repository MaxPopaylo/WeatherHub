import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDataComponent } from './views/count-data/count-data.component';
import {DataTablesModule} from "angular-datatables";
import { MeasurementsComponent } from './views/measurements/measurements.component';
import {HighchartsChartModule} from "highcharts-angular";
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { GeneratorPageComponent } from './pages/generator-page/generator-page.component';
import {RouterModule} from "@angular/router";
import { MainInfoPageComponent } from './pages/main-info-page/main-info-page.component';
import { AdminTableComponent } from './views/admin-table/admin-table.component';
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

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
    HighchartsChartModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
