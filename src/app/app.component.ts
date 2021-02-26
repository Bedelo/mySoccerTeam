import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'LISTE', url: '/list-equipe', icon: 'paper-plane' },
    { title: 'AJOUTER', url: '/ajout-equipe', icon: 'paper-plane' },
    { title: 'MODIFIER', url: '/modif-equipe', icon: 'paper-plane' },
  ];
  constructor() {}
}
