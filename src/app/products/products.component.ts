import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  ProductList: any;
  
  constructor(private hpservice: PhoneService) {}

  ngOnInit (): void{
    this.getProducts();
  }

 getProducts(): void {
    this.hpservice.getProducts().subscribe((data: any) => {
      this.ProductList = data;
     // this.productList.sort((a: { age: number; }, b: { age: number; }) => (a.age < b.age) ? 1:
    },
    (error: any) => {
      console.log('http-error:');
      console.log(error);
    });
    
  }

}
