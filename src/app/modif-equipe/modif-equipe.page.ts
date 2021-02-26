import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeService } from '../equipe.service';

@Component({
  selector: 'app-modif-equipe',
  templateUrl: './modif-equipe.page.html',
  styleUrls: ['./modif-equipe.page.scss'],
})
export class ModifEquipePage implements OnInit {
  fromLisTeam;
  id: number;
  name: 'string';
  country: 'string';

  constructor(private service: EquipeService, private router: Router) {}

  ngOnInit() {
    this.fromLisTeam = this.service.getTeam();
    this.id = this.fromLisTeam.id;
    this.name = this.fromLisTeam.name;
    this.country = this.fromLisTeam.country;
  }

  update() {
    this.fromLisTeam = this.service.getTeam();

    if (this.fromLisTeam.id != 0 && this.fromLisTeam.id != null) {
      console.log(this.fromLisTeam);
      this.service.putData(this.fromLisTeam.id, this.fromLisTeam).subscribe();
      this.fromLisTeam.id = 0;
      this.fromLisTeam.name = '';
      this.fromLisTeam.country = '';
      alert('modification effectué');
      this.router.navigate(['/list-equipe']);
    }
  }
}
