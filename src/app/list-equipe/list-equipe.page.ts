import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeService } from '../equipe.service'

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.page.html',
  styleUrls: ['./list-equipe.page.scss'],
})
export class ListEquipePage implements OnInit {
  team: any;

  constructor(private service: EquipeService, private router: Router) {}

  ngOnInit() {
    console.log(this.team);
    this.service.getData().subscribe((response) => {
      this.team = response;
      console.log(this.team);
    });
  }

  supprimer(teamHTML) {
    this.service.supprData(teamHTML.id).subscribe((response) => {
      console.log(teamHTML.id);
      this.refresh();
    });  
  }

  refresh() {
    this.service.getData().subscribe((response) => {
      this.team = response;
      console.log(this.team);
    });
  }

  modifier(teamHTML) {
    this.service.setTeam(teamHTML)
    this.router.navigate(['/modif-equipe']);
  }
}
