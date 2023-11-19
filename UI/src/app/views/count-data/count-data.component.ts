import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataHandlerService} from "../../_services/data-handler.service";
import {CountData} from "../../_model/data/CountData";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-count-data',
  templateUrl: './count-data.component.html',
  styleUrls: ['./count-data.component.css']
})
export class CountDataComponent {

  constructor(public dataHandler: DataHandlerService) {
  }

}
