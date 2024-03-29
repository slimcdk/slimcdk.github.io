import { Component } from '@angular/core';
import { ProjectCard } from '../../project-card';

@Component({
  selector: 'app-google-pixel-mount-project',
  standalone: true,
  imports: [],
  templateUrl: './google-pixel-mount-project.component.html',
  styleUrl: './google-pixel-mount-project.component.css',
})
export class GooglePixelMountProjectComponent implements ProjectCard {
  public desc_route: string = "/project/google-pixel-tablet";
  public desc_title: string = "Google Pixel Tablet";
  public desc_image: string = "";
  public desc_date: Date = new Date();
}

