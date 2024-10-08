import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'acerdade',
    loadComponent: () => import('./pages/acerdade/acerdade.page').then( m => m.AcerdadePage)
  },
  {
    path: 'consulta/:fav',
    loadComponent: () => import('./pages/consulta/consulta.page').then( m => m.ConsultaPage)
  },
  {
    path: 'buscar',
    loadComponent: () => import('./pages/buscar/buscar.page').then( m => m.BuscarPage)
  },
  {
    path: 'intro',
    loadComponent: () => import('./pages/intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'favoritos/:fav',
    loadComponent: () => import('./pages/consulta/consulta.page').then( m => m.ConsultaPage)
  }
];
