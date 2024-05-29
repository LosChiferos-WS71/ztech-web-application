import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-flowerpot',
  standalone: true,
  imports: [],
  templateUrl: './config-flowerpot.component.html',
  styleUrl: './config-flowerpot.component.css'
})
export class ConfigFlowerpotComponent {

  constructor(private router: Router) {}

  onSaveClick() {
    this.router.navigate(['/loaded/pot']);
    setTimeout(() => {
      this.router.navigate(['/choose/plant']);
    }, 3000);
  }
}
