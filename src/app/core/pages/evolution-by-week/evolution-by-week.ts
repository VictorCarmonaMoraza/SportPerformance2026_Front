import { Component, input } from '@angular/core';
import { ChartComponent } from "../../../shared/components/Chart/chart/chart";

@Component({
  selector: 'app-evolution-by-week',
  imports: [ChartComponent],
  templateUrl: './evolution-by-week.html',
  styleUrl: './evolution-by-week.css'
})
export class EvolutionByWeek {
  readonly pageTitle = input.required<string>();
}
