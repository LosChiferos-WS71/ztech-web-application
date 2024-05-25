import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-notification-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.css'
})
export class NotificationCardComponent{
  notifications = [
    { title: 'Riega tus plantas', message: 'Recuerda regar las plantas hoy.' },
    { title: 'No te olvides de comprar', message: 'No te olvides de comprar lo que necesitas.' }
  ];

}
