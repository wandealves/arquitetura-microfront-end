import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'dashboard-one',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Component', // Expondo o componente standalone
      }).then((m) => m.AppComponent), // Nome do componente standalone
  },
  {
    path: 'dashboard-two',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Component', // Expondo o componente standalone
      }).then((m) => m.AppComponent), // Nome do componente standalone
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
