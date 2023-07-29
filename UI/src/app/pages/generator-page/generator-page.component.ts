import { Component } from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";

@Component({
  selector: 'app-generator-page',
  templateUrl: './generator-page.component.html',
  styleUrls: ['./generator-page.component.css']
})
export class GeneratorPageComponent {

  inputData: number;

  constructor(private dataHandler: DataHandlerService) {
  }

  generateData(): void {
    return this.dataHandler.generate(this.inputData);
  }

}
