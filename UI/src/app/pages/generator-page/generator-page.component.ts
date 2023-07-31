import { Component } from '@angular/core';
import {DataHandlerService} from "../../_services/data-handler.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-generator-page',
  templateUrl: './generator-page.component.html',
  styleUrls: ['./generator-page.component.css']
})
export class GeneratorPageComponent {

  inputData: number;

  constructor(private dataHandler: DataHandlerService, private router: Router) {
  }

  generateData(): void {
    this.dataHandler.generate(this.inputData).subscribe(
      data => console.log(data)
    );
    this.redirectToOtherPage();
  }

  redirectToOtherPage() {
    this.router.navigate([""]);
  }

}
