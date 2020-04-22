import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { SelectorTypeModel } from "src/app/models/chart-type/chart-type.model";

@Component({
  selector: "app-chart-type-selector",
  templateUrl: "./chart-type-selector.component.html",
  styleUrls: ["./chart-type-selector.component.css"],
})
export class ChartTypeSelectorComponent implements OnInit {
  @Input() select: SelectorTypeModel;
  @Output() type = new EventEmitter<string>();
  chartType: string;

  constructor() {}

  ngOnInit(): void {
    this.chartType = this.select.defaultValue;
  }

  update() {
    this.type.emit(this.chartType);
  }
}
