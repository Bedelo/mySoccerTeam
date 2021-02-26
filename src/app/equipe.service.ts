import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EquipeService {
  team = [
    {
      id: 0,
      name: 'psg',
      country: 'fr'
    },
  ];

  private baseurl: string = 'http://localhost:5000/equipes';
  newurl: string;
  change: boolean = false;

  constructor(private http: HttpClient) {}

  getTeam() {
    return this.team;
  }

  setTeam(team) {
    this.team = team
  }

  public getData() {
    return this.http.get(this.baseurl);
  }

  public postData(team: any) {
    return this.http.post(this.baseurl, team);
  }

  public putData(id: number, team: any) {
    this.newurl = this.baseurl + '/' + id;
    console.log(this.newurl);
    return this.http.put(this.newurl, team);
  }

  public supprData(id: number) {
    this.newurl = this.baseurl + '/' + id;
    console.log("Suppression en cours a l'adresse: " + this.newurl);
    return this.http.delete(this.newurl);
  }
}
