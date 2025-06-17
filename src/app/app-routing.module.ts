import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Définissez vos routes ici.
// Exemple avec une route par défaut vers les onglets (tabs)
const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs', // Redirige la racine vers la route 'tabs'
    pathMatch: 'full'
  },
 
  // Ajoutez d'autres routes de niveau racine ici, comme votre page de connexion
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }