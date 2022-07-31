import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Project } from 'src/app/interfaces/interface';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent implements OnInit {
  project: Project;

  constructor(
    private cs: CommonService,
    private param: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Scroll to Top
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    let id: any = this.param.snapshot.paramMap.get('id');
    this.cs.getProjectByID(id).subscribe((res) => {
      this.project = res.data;
      console.log(this.project);
    });
  }
}
