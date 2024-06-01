import {Component, Input, OnInit} from '@angular/core';
import {NotificationCardComponent} from "../notification-card/notification-card.component";
import {NgForOf, NgIf} from "@angular/common";

interface Notification {
    id: string;
    title: string;
    plant: string;
    day: string;
}
@Component({
  selector: 'app-notification-group',
  standalone: true,
    imports: [NotificationCardComponent, NgForOf, NgIf],
  templateUrl: './notification-group.component.html',
  styleUrl: './notification-group.component.css'
})
export class NotificationGroupComponent implements OnInit{
    @Input() notifications: Notification[] = [
        { id: '1', title: 'NOTIFICATION 1', plant: 'Plant 1', day: '2024-05-28' },
        { id: '2', title: 'NOTIFICATION 1', plant: 'Plant 2', day: '2024-05-20' },
        { id: '3', title: 'NOTIFICATION 3', plant: 'Plant 3', day: '2024-05-20' },
        { id: '4', title: 'NOTIFICATION 4', plant: 'Plant 4', day: '2024-05-21' },
        { id: '5', title: 'NOTIFICATION 5', plant: 'Plant 5', day: '2024-05-21' },
        { id: '6', title: 'NOTIFICATION 6', plant: 'Plant 6', day: '2024-05-21' },
        { id: '7', title: 'NOTIFICATION 7', plant: 'Plant 7', day: '2024-05-21' }
    ];
    groupedNotifications: { date: string; notifications: Notification[] }[] = [];
    hasNotifications = true;

    ngOnInit() {
        this.groupNotificationsByDate();
    }

    groupNotificationsByDate() {
        const grouped: { [key: string]: Notification[] } = {};
        const today = new Date().toISOString().split('T')[0]; // Obtiene la fecha de hoy en formato 'YYYY-MM-DD'

        this.notifications.forEach(notification => {
            const notificationDate = notification.day === today ? 'Today' : notification.day;

            if (!grouped[notificationDate]) {
                grouped[notificationDate] = [];
            }
            grouped[notificationDate].push(notification);
        });

        this.groupedNotifications = Object.keys(grouped).map(date => ({
            date,
            notifications: grouped[date]
        }));

        this.hasNotifications = this.groupedNotifications.length > 0;
    }
}
