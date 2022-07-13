import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor(private cs:CommonService) { }

  name = '';

  ngOnInit(): void {
    this.cs.getHomedata().subscribe(res=>{
      this.name = res.data.attributes.name;
    })
  }

}
