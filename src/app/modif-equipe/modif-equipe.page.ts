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
    
  }

  update() {
    this.fromLisTeam = this.service.getTeam();

    if (this.fromLisTeam.id != 0 && this.fromLisTeam.id != null) {
      this.fromLisTeam.id= Number (this.id);
      this.fromLisTeam.name= this.name;
      this.fromLisTeam.country= this.country;
      console.log(this.fromLisTeam);
      this.service.putData(this.fromLisTeam.id, this.fromLisTeam).subscribe();

      alert('modification effectué');
      this.router.navigate(['/list-equipe']);
    }
  }
}
