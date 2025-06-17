// src/app/app/login/login.module.ts (Exemple)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // <-- Assurez-vous que cette ligne est présente
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // <-- Ajoutez IonicModule ici
     RouterModule,
  ],
  declarations: []
})
export class LoginPageModule {}