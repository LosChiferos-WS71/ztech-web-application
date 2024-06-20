import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list-table',
  standalone: true,
  imports: [CommonModule],
  exportAs: 'orderListTable',
  templateUrl: './order-list-table.component.html',
  styleUrl: './order-list-table.component.css'
})
export class OrderListTableComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  onDelete(orderId: number): void {
    this.orderService.deleteOrder(orderId).subscribe(updatedOrders => {
      this.orders = updatedOrders;
    });
  }

  // Implementa métodos para editar y detalles si es necesario
}