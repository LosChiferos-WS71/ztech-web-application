import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatPrefix} from "@angular/material/form-field";

@Component({
  selector: 'app-generate-order',
  standalone: true,
  imports: [MatIconModule,MatPrefix],
  templateUrl: './generate-order.component.html',
  styleUrl: './generate-order.component.css'
})
export class GenerateOrderComponent {

}
