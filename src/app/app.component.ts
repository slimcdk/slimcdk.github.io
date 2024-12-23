import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  Router,
  RouterOutlet,
  RouterModule,
  ActivatedRoute,
} from '@angular/router';

import { initFlowbite } from 'flowbite';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    initFlowbite();
  }
}
