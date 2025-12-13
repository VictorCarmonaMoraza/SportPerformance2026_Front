import { Component, signal } from '@angular/core';
import { TRAINING_GOALS } from '../../../constantes/constants';
import { EvolutionByMonth } from "../evolution-by-month/evolution-by-month";
import { EvolutionByWeek } from "../evolution-by-week/evolution-by-week";
import { EvolutionByYear } from "../evolution-by-year/evolution-by-year";

@Component({
  selector: 'app-user-info-page',
  imports: [EvolutionByWeek, EvolutionByMonth, EvolutionByYear],
  templateUrl: './user-info-page.html',
  styleUrl: './user-info-page.css'
})
export class UserInfoPage {

  listaObjetivos = signal<string[]>(TRAINING_GOALS);

}
