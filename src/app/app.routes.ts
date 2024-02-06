import { Routes } from '@angular/router';
import { OverviewComponent } from './elements/pages/overview/overview.component';
import { ConfigurationsComponent } from './elements/pages/configurations/configurations.component';
import { ReportsComponent } from './elements/pages/reports/reports.component';

export const routes: Routes = [
    { path: '', component: OverviewComponent, pathMatch: 'full' },
    { path: 'configurations', component: ConfigurationsComponent },
    { path: 'reports', component: ReportsComponent },
    { path: '**', component: OverviewComponent }
];
