import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-generate-claim',
  standalone: true,
  templateUrl: './generate-claim.component.html',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  styleUrls: ['./generate-claim.component.css']
})
export class GenerateClaimComponent {

}
