import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { ButtonComponent } from "src/app/components/button/button.component";
import { PieChartComponent } from "src/app/components/pie-chart/pie-chart.component";
import { ChartTypeSelectorComponent } from "src/app/components/chart-type-selector/chart-type-selector.component";
import { ColorPickerComponent } from "src/app/components/color-picker/color-picker.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [
        HomeComponent,
        ButtonComponent,
        PieChartComponent,
        ChartTypeSelectorComponent,
        ColorPickerComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
