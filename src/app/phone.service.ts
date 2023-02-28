import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService  {

  constructor(private http: HttpClient) { }



 getProducts(): any {
    const products = this.http.get('assets/phones/phones.json');
    return products;
  }

  getProduct(id:string): any {
    const product = this.http.get('assets/phones/' + id + '.json');
    return product;
  }

}
