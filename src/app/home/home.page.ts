import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent],
})


export class HomePage {
  
  public contatos: Array<any> =[];
seleciona: any;
  constructor(public alerta: AlertController) {

    this.contatos = [

      {nome: 'Ricardo' , telefone: '1234-1234'},
      {nome: 'João' , telefone: '2222-1234'},
      {nome: 'Maria' , telefone: '3333-1234'},
      {nome: 'Fernanda' , telefone: '4444-1234'},
      {nome: 'Ana' , telefone: '5555-1234'}

    ];
  }
}
