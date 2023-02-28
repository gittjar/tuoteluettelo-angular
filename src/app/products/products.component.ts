import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ProductList: any;
  SortProductList: any;
  term = '';
  searchTerm = '';

  // Fontawesome
  faArrowRight = faArrowRight;
  faMagnifyingGlass = faMagnifyingGlass;

  
  constructor(private hpservice: PhoneService) {}

  ngOnInit (): void{
    this.getProducts();
   // this.sortName();
  }


 /* sortName(): void {
     this.SortProductList.sort((a: {name: string;}, b: {name: string;}) => a.name < b.name);
    }
    */

   
// sorted by name
    sortA(isAsc: boolean) {
      if (isAsc) {
        this.ProductList.sort((a: { name: string; }, b: { name: string; }) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
      )} else {
        this.ProductList.sort((a: { name: string; }, b: { name: string; }) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0)
      )}
    }
// sorted by age
    sortB(isAsc: boolean) {
      if (isAsc) {
        this.ProductList.sort((a: { age: number;}, b: { age: number;}) => (a.age > b.age) ? 1 : ((b.age > a.age) ? -1 : 0)
        )} else {
          this.ProductList.sort((a: { age: number;}, b: { age: number;}) => (a.age > b.age) ? - 1 : ((b.age > a.age) ? -1 : 0)
          )}

      }


    




 getProducts(): void {
    this.hpservice.getProducts().subscribe((data: any) => {
      this.ProductList = data;
     ///this.ProductList.sort((a: { age: number; }, b: { age: number; }) => (a.age < b.age) ? 1:


    },
    (error: any) => {
      console.log('http-error:');
      console.log(error);
    });
    
  }

}
