import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService  {

  // get one product -> to getProduct function
  private productUrl = 'assets/phones/';

  constructor(private http: HttpClient) { }

 getProducts(): any {
    const products = this.http.get('assets/phones/phones.json');
    return products;
  }

 getProduct(id: string): any {
  const product = this.http.get(this.productUrl + id + '.json');
   //const product = this.http.get('assets/phones/phones.json');
  return product;
  } 


  /* 
  getProduct(id: string): Observable<Product | undefined> {
    return this.getProducts()
      .pipe(
        map((products: Product[]) => products.find(p => p.name === id + '.json'))
      );
  }
*/
}
