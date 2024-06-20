import { Component } from '@angular/core';
import { ToolbarSupplierComponent } from '../../components/toolbar-supplier/toolbar-supplier.component';
import { TableOrdersComponent } from '../../../inventory/components/table-orders/table-orders.component';

@Component({
  selector: 'app-order-requests',
  standalone: true,
  imports: [ ToolbarSupplierComponent, TableOrdersComponent ],
  templateUrl: './order-requests.component.html',
  styleUrl: './order-requests.component.css'
})
export class OrderRequestsComponent {

}
