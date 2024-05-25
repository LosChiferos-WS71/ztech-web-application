import { Component } from '@angular/core';
import {NotificationCardComponent} from "../../../account/components/notification-card/notification-card.component";

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NotificationCardComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

}
