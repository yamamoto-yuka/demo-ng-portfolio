import { Component, ElementRef, OnInit,   AfterViewInit,QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, AfterViewInit {
  @ViewChildren('imgWrap', {read:ElementRef}) imgWrap: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
  }

  project:any[] = [
    {
      img:'../../../assets/projects/miki.jpg'
    },
    {
      img:'../../../assets/projects/miki.jpg'
    },
    {
      img:'../../../assets/projects/miki.jpg'
    }
  ]

  ngAfterViewInit(): void{
    let setItemActive = (entries:any) =>{
      entries.forEach((entry:any)=>{
        if(entry.isIntersecting){
          entry.target.classList.add('active');
        }else{
          entry.target.classList.remove('active');
        }
      })
    }

    let options = {};

    let observer = new IntersectionObserver(setItemActive, options);

    this.imgWrap.forEach((item, index) =>{
      observer.observe(item.nativeElement);
      console.log(item.nativeElement)
    })
  }

}
