import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NotificationComponent } from "../notification/notification.component";
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-toolbar-supplier',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, NotificationComponent],
  templateUrl: './toolbar-supplier.component.html',
  styleUrl: './toolbar-supplier.component.css'
})
export class ToolbarSupplierComponent {
  constructor(private router:Router, private authService: AuthService) { }


  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
