import { Component, OnInit } from "@angular/core";
import { PostModel } from "src/app/models/post/post.model";
import { PieModel } from "src/app/models/pie-donut/pie-donut.model";
import { SelectorTypeModel } from "src/app/models/chart-type/chart-type.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  dataSource: PieModel[] = [];
  type: string;
  colorArray: Array<string>;
  chartTypeArray: SelectorTypeModel;

  constructor() {}

  ngOnInit(): void {
    this.initVariables();
  }

  initVariables() {
    this.dataSource = [];
    this.type = "donut";
    this.colorArray = [
      "#FF0000",
      "#FFA500",
      "#e5e500",
      "#008000",
      "#0000b2",
      "#4B0082",
      "#EE82EE",
      "#FFC0CB",
      "#808080",
      "#d9ddd3",
    ];
    this.chartTypeArray = {
      defaultValue: "donut",
      options: [
        {
          label: "Pie Chart Type",
          value: "pie",
        },
        {
          label: "Donut Chart Type",
          value: "donut",
        },
      ],
    };
  }

  getData(e: PieModel[]) {
    this.dataSource = e;
  }

  getType(e: string) {
    this.type = e;
  }

  changeColor(e: Array<string>) {
    this.colorArray = e;
  }
}
