import { Project } from './../../core/models/project.model';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/core/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
 projectsList:Project[]=[];
 angularProjectList:Project[]=[];
  constructor(private ps:ProjectsService) { }

  ngOnInit(): void {
    this.getProjects()
  }
  getProjects(){
    this.ps.getProjectsList().subscribe((data:any)=>{
      this.projectsList = data;
      this.angularProjectList=this.projectsList.filter((item:Project)=>{
        return item.framework=='angular'
      })
      console.log(this.projectsList);
    })
  }

}
