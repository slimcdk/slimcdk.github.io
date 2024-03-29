import { Component } from '@angular/core';
import { ProjectCard } from '../../project-card';


@Component({
  selector: 'app-wifi-stepper-project',
  standalone: true,
  imports: [],
  templateUrl: './wifi-stepper-project.component.html',
  styleUrl: './wifi-stepper-project.component.css',
})
export class WifiStepperProjectComponent implements ProjectCard {
  public desc_route: string = "/project/wifi-stepper";
  public desc_title: string = "WiFi Stepper";
  public desc_image: string = "";
  public desc_date: Date = new Date();
}
