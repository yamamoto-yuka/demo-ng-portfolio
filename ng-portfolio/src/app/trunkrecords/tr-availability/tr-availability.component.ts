import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tr-availability',
  templateUrl: './tr-availability.component.html',
  styleUrls: ['./tr-availability.component.scss']
})
export class TrAvailabilityComponent implements OnInit {
  @Input() inStock: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
