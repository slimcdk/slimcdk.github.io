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
  _picture_url: string = '';
}
