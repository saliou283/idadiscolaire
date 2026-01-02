import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
    {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
    },

    
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  },
  
  {
    path: 'login',
    loadComponent: () => import('./app/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'landing',
    loadComponent: () => import('./landing/landing.page').then( m => m.LandingPage)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./reset-password/reset-password.page').then( m => m.ResetPasswordPage)
  },
  {
    path: 'accueil',
    loadComponent: () => import('./accueil/accueil/accueil.page').then( m => m.AccueilPage)
  },
  {
    path: 'etudiant',
    loadComponent: () => import('./etudiants/etudiant/etudiant.page').then( m => m.EtudiantPage)
  },
  {
    path: 'enseignant',
    loadComponent: () => import('./enseignants/enseignant/enseignant.page').then( m => m.EnseignantPage)
  },
  {
    path: 'note',
    loadComponent: () => import('./notes/note/note.page').then( m => m.NotePage)
  },
  {
    path: 'absence',
    loadComponent: () => import('./absences/absence/absence.page').then( m => m.AbsencePage)
  },
  {
    path: 'emploi',
    loadComponent: () => import('./emplois/emploi/emploi.page').then( m => m.EmploiPage)
  },
  {
    path: 'deliberation',
    loadComponent: () => import('./deliberations/deliberation/deliberation.page').then( m => m.DeliberationPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  
  {
    path: 'services',
    loadComponent: () => import('./services/services.page').then( m => m.ServicesPage)
  },
];
 