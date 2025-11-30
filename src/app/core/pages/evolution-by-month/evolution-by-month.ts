import { Component, input } from '@angular/core';
import { ChartComponent } from "../../../shared/components/Chart/chart/chart";

@Component({
  selector: 'app-evolution-by-month',
  imports: [ChartComponent],
  templateUrl: './evolution-by-month.html',
  styleUrl: './evolution-by-month.css'
})
export class EvolutionByMonth {

  // readonly pageTitle = 'Evolución mensual';
  readonly pageTitle = input.required<string>();

}
