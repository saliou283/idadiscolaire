import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 

  IonButton, 
  IonIcon, 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonInput, 
  IonItem,
  IonLabel,
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    RouterModule, 
    IonButton, 
    IonIcon, 
    IonContent, 
    IonHeader,
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonInput, 
    IonItem,
    IonLabel,

  ]
})
export class LoginPage  {
             page = [
              { id: 1, name: 'saliou' },
              { id: 2, name: 'abdou' },
             ]
  constructor() { }

  ngOnInit() {
  }

}
