import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrCommonService } from '../../services/tr-common.service';

@Component({
  selector: 'app-tr-manage-products',
  templateUrl: './tr-manage-products.component.html',
  styleUrls: ['./tr-manage-products.component.scss']
})
export class TrManageProductsComponent implements OnInit {
  products: any[] = [];
  product_name: string = '';
  product_desc: string = '';
  product_price: any = '';
  product_availability: any = '';
  showMessage = 'none';
  addproductStatus = false;
  
  constructor(private cs:TrCommonService, private router:Router) { }

  addproduct() {
    let addData = {
      data: {
        product_name: this.product_name,
        product_desc: this.product_desc,
        product_price: this.product_price,
        product_quantity: this.product_availability,
        product_display: false,
      },
    };
    this.cs.addNewProduct(addData).subscribe((res) => {
      console.log(res.data);
      this.showMessage = 'block';
      this.addproductStatus = true;
      this.ngOnInit();
    });
  }

  OnChangeDisplay(id:number, event:any){
    console.log(event);
      let updateData ={
        data:{
          product_display:event.target.checked 
        }
      }
      this.cs.updateDisplay(id, updateData).subscribe(res =>{
        console.log(res);
      })
  }

  signout(){
    localStorage.clear();
    this.router.navigate(['/trunkrecords/admin/login']);
}


  ngOnInit(): void {
    this.cs.getAllproduct().subscribe((res) => {
      this.products = res.data;
    });
  }

}
