import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration-flowerpot',
  standalone: true,
  imports: [ToolbarComponent],
  templateUrl: './configuration-flowerpot.component.html',
  styleUrl: './configuration-flowerpot.component.css'
})
export class ConfigurationFlowerpotComponent {
  constructor(private router: Router) {}

  onSaveClick() {
    this.router.navigate(['/loaded/pot']);
    setTimeout(() => {
      this.router.navigate(['/choose/plant']);
    }, 3000);
  }
}
