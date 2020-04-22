import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { HomeDataService } from "src/app/services/home-data.service";
import { PostModel } from "src/app/models/post/post.model";
import { PieModel } from "src/app/models/pie-donut/pie-donut.model";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent implements OnInit {
  @Output() posts = new EventEmitter<PieModel[]>();
  constructor(private homeService: HomeDataService) {}

  ngOnInit(): void {}

  getData() {
    this.homeService.getData().subscribe(
      (res: PostModel[]) => {
        this.posts.emit(this.groupBy(res));
      },
      (err) => {
        alert("Please check your internet connection!");
      }
    );
  }

  groupBy(res: PostModel[]) {
    return res
      .map((item) => item.userId)
      .filter((item, i, ar) => ar.indexOf(item) === i)
      .sort((a, b) => a - b)
      .map((item) => {
        let new_list = res
          .filter((itm) => itm.userId == item)
          .map((itm) => itm.id);
        return { label: "User " + item, value: new_list.length };
      });
  }
}
