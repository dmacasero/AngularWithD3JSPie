import { TestBed } from "@angular/core/testing";

import { HomeDataService } from "./home-data.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("HomeDataService", () => {
  let service: HomeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.get(HomeDataService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
