import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Authentication } from "../../../auth/authentication";

@Component({
  selector: 'app-home-page',
  imports: [Authentication],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
