import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EquipeService } from '../equipe.service'

@Component({
  selector: 'app-ajout-equipe',
  templateUrl: './ajout-equipe.page.html',
  styleUrls: ['./ajout-equipe.page.scss'],
})
export class AjoutEquipePage implements OnInit {

  equipe: string
  country: string
  id: number 
  team;

  constructor(private service : EquipeService, private router: Router) { }

  ngOnInit() {
  }

  envoyer(){
    this.team = { 
      id: Number (this.id),
      name: this.equipe,
      country: this.country
    }
    console.log(typeof this.team.id)

    if(this.team.id == null || ((typeof this.team.id) != "number" )){
      alert("Entrer une valeur numerique pour ID")
    }else{
      console.log(this.team)
      this.service.postData(this.team).subscribe();
      alert('ajout effectué');
      this.router.navigate(['/list-equipe']);
    }
    
  }

}
