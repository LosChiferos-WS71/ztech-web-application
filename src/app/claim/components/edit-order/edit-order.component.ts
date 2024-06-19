import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatPrefix} from "@angular/material/form-field";

@Component({
  selector: 'app-edit-order',
  standalone: true,
  imports: [MatIconModule, MatPrefix],
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css'
})
export class EditOrderComponent {

}
