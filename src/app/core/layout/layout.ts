import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../../shared/components/footer/footer";



@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
