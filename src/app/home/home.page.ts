import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, 
  IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonLabel, 
  IonListHeader, IonCardTitle, IonCol, IonIcon, IonList, IonItem 
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonButtons, 
    IonMenuButton, IonCard, IonCardHeader, IonCardSubtitle,
     IonCardContent, IonGrid, IonRow, IonLabel, IonListHeader, 
     IonCardTitle, IonCol, IonIcon, IonList, IonItem 
  ]
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  navigateToAccueil(){
    this.navCtrl.navigateForward('accueil');
  }

  ngOnInit() {
  }

}
