import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService } from '../phone.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit  {
 // product_id: string;

  ProductDetail: any;
 // product: Product | undefined;
  pageTitle = 'Product Detail';

  constructor(private actRoute: ActivatedRoute, private router: Router, private hpservice: PhoneService) {
  // this.product_id = this.actRoute.snapshot.params['id'];
  }

  ngOnInit (): void{
   // this.getProductDetail();
   // this.sortName();
   const id = String(this.actRoute.snapshot.paramMap.get('id'));
if(id){
     this.getProductDetail(id);
}
  }
/*
  getProduct(id: string): void {
    this.hpservice.getProduct(id).subscribe({
      next: product => this.product = product
    });
  }*/

  ChangeImg() {  
     
  } 

  
  getProductDetail(id: string): any {
    this.hpservice.getProduct(id).subscribe((data: any) => {
      this.ProductDetail = data;
    },
    (error: any) => {
      console.log('http-error:');
      console.log(error);
    });
  }


onBack(): void {
  this.router.navigate(['/products']);
}

}
