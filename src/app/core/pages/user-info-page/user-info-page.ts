import { Component, signal } from '@angular/core';
import { EvolutionByWeek } from "../evolution-by-week/evolution-by-week";
import { EvolutionByMonth } from "../evolution-by-month/evolution-by-month";
import { EvolutionByYear } from "../evolution-by-year/evolution-by-year";
import { TRAINING_GOALS } from '../../../constantes/constants';

@Component({
  selector: 'app-user-info-page',
  imports: [EvolutionByWeek, EvolutionByMonth, EvolutionByYear],
  templateUrl: './user-info-page.html',
  styleUrl: './user-info-page.css'
})
export class UserInfoPage {

  listaObjetivos = signal<string[]>(TRAINING_GOALS);

}
