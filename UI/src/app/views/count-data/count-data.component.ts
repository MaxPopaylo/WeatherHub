import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {CountData} from "../../model/CountData";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-count-data',
  templateUrl: './count-data.component.html',
  styleUrls: ['./count-data.component.css']
})
export class CountDataComponent implements OnInit, OnDestroy{

  private subscription: Subscription;
  countData: CountData;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    // this.dataHandler.getCountData().subscribe(value =>
    //   this.countData = value
    // );
    // console.log(this.countData.valueCount);

  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
