import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, 
  IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonLabel, 
  IonListHeader, IonCardTitle, IonCol, IonIcon, IonList, IonItem, IonItemOptions,
IonItemOption, IonItemSliding, IonText, IonSpinner, IonAvatar, 
IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.page.html',
  styleUrls: ['./etudiant.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, 
  IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonLabel, 
  IonListHeader, IonCardTitle, IonCol, IonIcon, IonList, IonItem, IonItemOptions, 
  IonItemOption, IonItemSliding, IonText, IonSpinner, IonAvatar, 
  IonButton,
]
})
export class EtudiantPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
