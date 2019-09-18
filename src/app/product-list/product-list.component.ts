import { Component } from '@angular/core';

import { productos } from '../../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productos = productos;

  compartir() {
    window.alert('No hay elementos aun!');
  }
}