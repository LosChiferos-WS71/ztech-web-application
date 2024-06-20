import { Component } from '@angular/core';
import { ToolbarSupplierComponent } from '../../components/toolbar-supplier/toolbar-supplier.component';
import { TableHistoryComponent } from '../../../inventory/components/table-history/table-history.component';

@Component({
  selector: 'app-accepted-orders',
  standalone: true,
  imports: [ToolbarSupplierComponent,TableHistoryComponent],
  templateUrl: './accepted-orders.component.html',
  styleUrl: './accepted-orders.component.css'
})
export class AcceptedOrdersComponent {

}
