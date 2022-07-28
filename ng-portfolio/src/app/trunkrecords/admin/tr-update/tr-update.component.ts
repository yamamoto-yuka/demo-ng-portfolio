import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrCommonService } from '../../services/tr-common.service';

@Component({
  selector: 'app-tr-update',
  templateUrl: './tr-update.component.html',
  styleUrls: ['./tr-update.component.scss']
})
export class TrUpdateComponent implements OnInit {
  product_name: string = '';
  product_desc: string = '';
  product_price: any = '';
  // product_image1: string = '';
  // product_image2: string = '';
  product_quantity: any = '';
  display: any = '';
  updateStatus = false;
  showMessage = 'none';
  errorMessage: any = '';


  constructor(
    private param: ActivatedRoute,
    private cs: TrCommonService,
    private router: Router
  ) { }

  update() {
    let id: any = this.param.snapshot.paramMap.get('id');
    let updateData = {
      data: {
        product_name: this.product_name,
        product_desc: this.product_desc,
        product_price: this.product_price,
        product_quantity: this.product_quantity
      }
    };
    this.cs.updateProduct(id, updateData).subscribe(res =>{
      this.updateStatus = true;
      this.showMessage ='block';
    });
  }


  delete(){
    if(confirm('Are you sure?')){
      let id:any = this.param.snapshot.paramMap.get('id');
      this.cs.deleteProduct(id).subscribe(res =>{
        this.router.navigate(['/trunkrecords/admin/home']);
      })
    }
  }

  ngOnInit(): void {
    let id: any = this.param.snapshot.paramMap.get('id');
    this.cs.getproductByID(id).subscribe(res => {
      this.product_name = res.data.attributes.product_name;
      this.product_desc = res.data.attributes.product_desc;
      this.product_price = res.data.attributes.product_price;
      this.product_quantity = res.data.attributes.product_quantity;
  });

}

}
