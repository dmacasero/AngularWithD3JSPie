import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChartTypeSelectorComponent } from "./chart-type-selector.component";
import { FormsModule } from "@angular/forms";

describe("ChartTypeSelectorComponent", () => {
  let component: ChartTypeSelectorComponent;
  let fixture: ComponentFixture<ChartTypeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ChartTypeSelectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTypeSelectorComponent);
    component = fixture.componentInstance;
    component.select = {
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
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
