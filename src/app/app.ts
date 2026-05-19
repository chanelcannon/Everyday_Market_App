import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import {ProductsPage} from "./market/products-page/products-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProductsPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Everyday Market App');
}
