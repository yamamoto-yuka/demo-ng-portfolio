import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrCommonService } from '../services/tr-common.service';

@Component({
  selector: 'app-tr-appareldetails',
  templateUrl: './tr-appareldetails.component.html',
  styleUrls: ['./tr-appareldetails.component.scss']
})
export class TrAppareldetailsComponent implements OnInit {
  product: any;

  constructor(private cs:TrCommonService, private param:ActivatedRoute) { }

  availability(data: any) {
    if (data > 0) return true;
    else return false;
  }

  ngOnInit(): void {
    let id: any = this.param.snapshot.paramMap.get('id');
    this.cs.getproductByID(id).subscribe((res) => {
      this.product = res.data;
      console.log(res.data);
    });
  }
  

}
