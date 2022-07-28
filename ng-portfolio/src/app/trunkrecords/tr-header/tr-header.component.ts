import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tr-header',
  templateUrl: './tr-header.component.html',
  styleUrls: ['./tr-header.component.scss']
})
export class TrHeaderComponent implements OnInit {
  activeBtn:boolean = false;
  
  constructor() { }

  menuBtn(){
    this.activeBtn = !this.activeBtn;
  }

  ngOnInit(): void {
  }

}
