import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AddPotInputComponent } from './flowerpot/components/add-pot-input/add-pot-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddPotInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ztech-web-app';
}
