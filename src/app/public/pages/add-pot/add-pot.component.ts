import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pot',
  standalone: true,
  imports: [ToolbarComponent],
  templateUrl: './add-pot.component.html',
  styleUrl: './add-pot.component.css'
})
export class AddPotComponent {
  constructor(private router: Router) {}

  onSaveClick() {
    this.router.navigate(['/loaded-pot']);
    setTimeout(() => {
      this.router.navigate(['/choose-plant']);
    }, 3000);
  }
}
