import { Component, OnInit, signal } from '@angular/core';
import { Authentication } from "../../../auth/authentication";



@Component({
  selector: 'app-home-page',
  imports: [Authentication],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage implements OnInit {
  title = signal<string>('')

  ngOnInit(): void {
    this.title.set('SportPerformance');
  }
}
