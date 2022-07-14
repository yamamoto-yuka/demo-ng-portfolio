import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/interfaces/interface';
import { CommonService } from 'src/app/services/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  // For Image URL
  server = environment.server;

  constructor(
    private cs: CommonService,
    private param: ActivatedRoute,
    private renderer: Renderer2,
  ) {}

  public onIntersection({
    target,
    visible,
  }: {
    target: Element;
    visible: boolean;
  }): void {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
  }

  ngOnInit(): void {
    let id: any = this.param.snapshot.paramMap.get('id');
    this.cs.getProjectByID(id).subscribe((res) => {
      this.project = res.data;
      console.log(this.project);
    });
  }
}
