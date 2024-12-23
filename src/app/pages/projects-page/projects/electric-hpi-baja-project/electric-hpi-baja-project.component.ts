import { Component } from '@angular/core';
import { ProjectCard } from '../../project-card';

@Component({
    selector: 'app-electric-hpi-baja-project',
    imports: [],
    templateUrl: './electric-hpi-baja-project.component.html',
    styleUrl: './electric-hpi-baja-project.component.css'
})
export class ElectricHpiBajaProjectComponent implements ProjectCard {
  public desc_route: string = '/project/electric-hpi-baja';
  public desc_title: string = 'Electric HPI Baja';
  public desc_image: string = '';
  public desc_date: Date = new Date();
}
