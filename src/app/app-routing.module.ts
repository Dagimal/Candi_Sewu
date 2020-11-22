import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'berita1',
    loadChildren: () => import('./berita1/berita1.module').then( m => m.Berita1PageModule)
  },
  {
    path: 'berita2',
    loadChildren: () => import('./berita2/berita2.module').then( m => m.Berita2PageModule)
  },
  {
    path: 'berita3',
    loadChildren: () => import('./berita3/berita3.module').then( m => m.Berita3PageModule)
  },
  {
    path: 'legenda',
    loadChildren: () => import('./legenda/legenda.module').then( m => m.LegendaPageModule)
  },
  {
    path: 'sejarah',
    loadChildren: () => import('./sejarah/sejarah.module').then( m => m.SejarahPageModule)
  },
  {
    path: 'peta',
    loadChildren: () => import('./peta/peta.module').then( m => m.PetaPageModule)
  },
  {
    path: 'galeri',
    loadChildren: () => import('./galeri/galeri.module').then( m => m.GaleriPageModule)
  },
  {
    path: 'bangunan',
    loadChildren: () => import('./bangunan/bangunan.module').then( m => m.BangunanPageModule)
  },
  {
    path: 'fasilitas',
    loadChildren: () => import('./fasilitas/fasilitas.module').then( m => m.FasilitasPageModule)
  },
  {
    path: 'tentang',
    loadChildren: () => import('./tentang/tentang.module').then( m => m.TentangPageModule)
  },
  {
    path: 'travel1',
    loadChildren: () => import('./travel1/travel1.module').then( m => m.Travel1PageModule)
  },
  {
    path: 'travel2',
    loadChildren: () => import('./travel2/travel2.module').then( m => m.Travel2PageModule)
  },
  {
    path: 'travel3',
    loadChildren: () => import('./travel3/travel3.module').then( m => m.Travel3PageModule)
  },
  {
    path: 'bangunan-navigator',
    loadChildren: () => import('./bangunan-navigator/bangunan-navigator.module').then( m => m.BangunanNavigatorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
