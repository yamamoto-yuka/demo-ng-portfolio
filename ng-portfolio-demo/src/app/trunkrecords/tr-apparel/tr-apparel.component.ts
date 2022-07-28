import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { TrCommonService } from '../services/tr-common.service';

@Component({
  selector: 'app-tr-apparel',
  templateUrl: './tr-apparel.component.html',
  styleUrls: ['./tr-apparel.component.scss']
})
export class TrApparelComponent implements OnInit {
    products: any[] = [];
    server = environment.server;
  constructor(private cs:TrCommonService) {}

  availability(data: any) {
    if (data > 0) return true;
    else return false;
  }


  ngOnInit(): void {
    this.cs.getAllproduct().subscribe((res) => {
      console.log(res);
      this.products = res.data;
    });
  }

}
