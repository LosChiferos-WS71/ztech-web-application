import { Routes } from '@angular/router';
import { FlowerpotDetailComponent } from './public/pages/flowerpot-detail/flowerpot-detail.component';
import { FlowerpotMetricsComponent } from './public/pages/flowerpot-metrics/flowerpot-metrics.component';

export const routes: Routes = [
    { path: 'flowerpot/detail', component: FlowerpotDetailComponent },
    { path: 'flowerpot/metrics', component: FlowerpotMetricsComponent },
];