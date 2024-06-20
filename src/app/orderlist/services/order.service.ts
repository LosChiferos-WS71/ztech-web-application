import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [
    { id: 1, description: 'x23 UV Ray sensors are needed...' },
    { id: 2, description: '40 pot mockups required...' }
  ];

  constructor() { }

  getOrders(): Observable<Order[]> {
    return of(this.orders);
  }

  deleteOrder(id: number): Observable<Order[]> {
    this.orders = this.orders.filter(order => order.id !== id);
    return of(this.orders);
  }

  // Añade aquí métodos para editar y ver detalles si es necesario
}
