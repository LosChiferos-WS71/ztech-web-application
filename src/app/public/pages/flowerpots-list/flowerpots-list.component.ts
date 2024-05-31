import { Component } from '@angular/core';

import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { WelcomeUserComponent } from '../../../account/components/welcome-user/welcome-user.component';
import { MyFlowerpotsComponent } from '../../../flowerpot/components/my-flowerpots/my-flowerpots.component';

@Component({
  selector: 'app-flowerpots-list',
  standalone: true,
  imports: [ToolbarComponent, WelcomeUserComponent , MyFlowerpotsComponent],
  templateUrl: './flowerpots-list.component.html',
  styleUrl: './flowerpots-list.component.css'
})
export class FlowerpotsListComponent {

}