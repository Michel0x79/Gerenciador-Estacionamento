import { Routes } from '@angular/router';
import { PanelComponent } from './components/panel/panel.component';
import { EntradaComponent } from './components/entrada/entrada.component';

export const routes: Routes = [
     {path: '', component: PanelComponent},
     {path: 'entrada', component: EntradaComponent}
];
