import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { ConfigFlowerpotComponent } from '../../../loan/components/config-flowerpot/config-flowerpot.component';

@Component({
  selector: 'app-configuration-flowerpot',
  standalone: true,
  imports: [ToolbarComponent, ConfigFlowerpotComponent],
  templateUrl: './configuration-flowerpot.component.html',
  styleUrl: './configuration-flowerpot.component.css'
})
export class ConfigurationFlowerpotComponent {
  
}
