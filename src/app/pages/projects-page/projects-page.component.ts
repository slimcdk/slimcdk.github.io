import { Component, OnInit } from '@angular/core';
import { ElectricHpiBajaProjectComponent } from './projects/electric-hpi-baja-project/electric-hpi-baja-project.component';
import { WifiStepperProjectComponent } from './projects/wifi-stepper-project/wifi-stepper-project.component';
import { GooglePixelMountProjectComponent } from './projects/google-pixel-mount-project/google-pixel-mount-project.component';
import { CommonModule } from '@angular/common';
import { ProjectCard } from './project-card';
import {  RouterModule } from '@angular/router';

const PROJECTS: ProjectCard[] = [
  new ElectricHpiBajaProjectComponent,
  new WifiStepperProjectComponent,
  new GooglePixelMountProjectComponent
]

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css',
})
export class ProjectsPageComponent implements OnInit {
  readonly projects = PROJECTS;

  ngOnInit(): void {
    this.projects.forEach(project => {
      console.log(project.desc_title)
    })
  }
}