import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { GooglePixelMountProjectComponent } from './pages/projects-page/projects/google-pixel-mount-project/google-pixel-mount-project.component';
import { WifiStepperProjectComponent } from './pages/projects-page/projects/wifi-stepper-project/wifi-stepper-project.component';
import { ElectricHpiBajaProjectComponent } from './pages/projects-page/projects/electric-hpi-baja-project/electric-hpi-baja-project.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Christian Skjerning',
    component: LandingPageComponent,
    data: { page: { header: 'Velkommen' } },
  },
  {
    path: 'about',
    title: 'Om',
    component: AboutPageComponent,
    data: { page: { header: 'Christian Skjerning' } },
  },
  {
    path: 'projects',
    title: 'Projekter',
    component: ProjectsPageComponent,
    data: { page: { header: 'Projekter' } },
  },
  {
    path: 'project/google-pixel-tablet',
    title: 'Google Pixel Tablet',
    component: GooglePixelMountProjectComponent,
    data: { page: { header: 'Google Piexel Tablet' } },
  },
  {
    path: 'project/wifi-stepper',
    title: 'WiFi Stepper',
    component: WifiStepperProjectComponent,
    data: { page: { header: 'WiFi Stepper' } },
  },
  {
    path: 'project/electric-hpi-baja',
    title: 'Electric HPI Baja',
    component: ElectricHpiBajaProjectComponent,
    data: { page: { header: 'Electic HPI Baja' } },
  },
];
