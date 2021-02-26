import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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

  constructor(
    private service: EquipeService,
    private router: Router,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.fromLisTeam = this.service.getTeam();
    this.id = this.fromLisTeam.id
    console.log(this.id)
  }

  update() {
    this.fromLisTeam = this.service.getTeam();

    if (this.id != 0 && this.id != null) {
      this.fromLisTeam.id = Number(this.id);
      this.fromLisTeam.name = this.name;
      this.fromLisTeam.country = this.country;
      console.log(this.fromLisTeam);
      this.service.putData(this.fromLisTeam.id, this.fromLisTeam).subscribe();

      alert('modification effectué');
      this.router.navigate(['/list-equipe']);
    } else {
      this.presentToast()
    }
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Attention: ID Invalid',
      color: 'warning',
      duration: 2000,
    });
    toast.present();
  }
}
