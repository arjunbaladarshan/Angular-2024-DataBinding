import { Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { ManualtwowayComponent } from './manualtwoway/manualtwoway.component';

export const routes: Routes = [
    {path:"interpolation", component:InterpolationComponent},
    {path:"peopertybinding",component:PropertybindingComponent},
    {path:"eventbinding",component:EventbindingComponent},
    {path:"manualtwoway",component:ManualtwowayComponent}
];
