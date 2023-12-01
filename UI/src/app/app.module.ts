import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDataComponent } from './views/count-data/count-data.component';
import {DataTablesModule} from "angular-datatables";
import { MeasurementsComponent } from './views/measurements/measurements.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import {RouterModule, Routes} from "@angular/router";
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
import {MatDialogModule} from "@angular/material/dialog";
import { ShowSensorPageComponent } from './pages/show-sensor-page/show-sensor-page.component';
import { ShowSensorComponent } from './views/show-sensor/show-sensor.component';
import { SensorMapComponent } from './views/maps/sensor-map/sensor-map.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {SensorChartComponent} from "./views/charts/sensor-chart/sensor-chart.component";
import { DataBySensorTableComponent } from './views/data-by-sensor-table/data-by-sensor-table.component';
import { RegisterSensorPageComponent } from './pages/register-sensor-page/register-sensor-page.component';
import { CreateSensorMapComponent } from './views/maps/create-sensor-map/create-sensor-map.component';
import { AllSensorsMapComponent } from './views/maps/all-sensors-map/all-sensors-map.component';
import { AllSensorsMapPageComponent } from './pages/all-sensors-map-page/all-sensors-map-page.component';

const routes: Routes = [
  {path: 'charts',  loadChildren: () => import('./views/charts/modul/charts/charts.module').then(m => m.ChartsModule) },

  {path: 'sensors', component: AdminPageComponent, pathMatch: 'full'},
  {path: 'sensors/new', component: RegisterSensorPageComponent},
  {path: 'sensors/map', component: AllSensorsMapPageComponent},
  {path: 'sensors/:id', component: ShowSensorPageComponent},

  {path: '', component: MainInfoPageComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    CountDataComponent,
    MeasurementsComponent,
    AdminPageComponent,
    MainInfoPageComponent,
    AdminTableComponent,
    ShowSensorPageComponent,
    ShowSensorComponent,
    SensorMapComponent,
    SensorChartComponent,
    DataBySensorTableComponent,
    RegisterSensorPageComponent,
    CreateSensorMapComponent,
    AllSensorsMapComponent,
    AllSensorsMapPageComponent
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
    ReactiveFormsModule,
    MatDialogModule,
    NgApexchartsModule
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
