import { Component } from '@angular/core';
import { OrderListTableComponent } from '../../../orderlist/components/order-list-table/order-list-table.component';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [OrderListTableComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {

}
