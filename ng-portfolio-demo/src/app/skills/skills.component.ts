import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Skill } from '../interfaces/interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  myskills:Skill[] =[];
  server = environment.server;
  title = '';

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getSkills().subscribe(res =>{
      console.log(res.data);
      this.myskills = res.data;
    })
  }

}
