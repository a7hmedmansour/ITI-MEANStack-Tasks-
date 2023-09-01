import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: string[] = ['Boots', 'T-Shirt', 'Ball', 'Short'];
  productsdes: string[] = [
    'LIGHTWEIGHT FOOTBALL CLEATS MADE IN PART WITH RECYCLED MATERIALS.',
    'A SUPPORTER JERSEY FOR A CLASSY CLUB, MADE WITH RECYCLED MATERIALS.',
    'A RECREATIONAL SOCCER BALL BASED ON THE MLS OFFICIAL MATCH BALL.',
    'SPORTY, STRETCHY LEGGINGS MADE IN PART WITH RECYCLED MATERIALS.',
  ];
  imgsrc: string[] = [
    'https://assets.adidas.com/images/w_1880,f_auto,q_auto/d825c6a921074654a448af3500926421_9366/GW4609_22_model.jpg',
    'https://shop.realmadrid.com/cdn/shop/products/RMCFMZ0127_01_7f8616a0-9006-4c4f-829a-c9ad552fa644_500x480.jpg?v=1685962973',
    'https://shop.realmadrid.com/cdn/shop/products/RMCFEQ0067-01_500x480.jpg?v=1691153219',
    'https://shop.realmadrid.com/cdn/shop/products/RMCFMO0013-02_500x480.jpg?v=1692000622',
  ];
}
