import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomePageRoutingModule } from './home-routing.module';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';
import { ChartTypeSelectorComponent } from 'src/app/components/chart-type-selector/chart-type-selector.component';
import { ColorPickerComponent } from 'src/app/components/color-picker/color-picker.component';

@NgModule({
  imports: [CommonModule, FormsModule, HomePageRoutingModule],
  declarations: [
    HomeComponent,
    ButtonComponent,
    PieChartComponent,
    ChartTypeSelectorComponent,
    ColorPickerComponent,
  ],
})
export class HomePageModule {}
