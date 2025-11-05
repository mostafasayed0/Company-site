import { Component } from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { SliderComponent } from "./components/slider/slider.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PageIconsComponent } from "./components/page-icons/page-icons.component";
import { ProductsComponent } from "./components/products/products.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    SliderComponent,
    FooterComponent,
    ContactComponent,
    PageIconsComponent,
    ProductsComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'new-app';
}
