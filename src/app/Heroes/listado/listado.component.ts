import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  heroes: string[] = ['Spiderman','IronMan','Hukl','Thor','HawkEye'];
  heroesborrados : string = '';

  borrarHeroe(){

    if(this.heroes.length>0) {
      this.heroesborrados = `${this.heroesborrados} ${this.heroes.shift()}`;
    } 
  }
}
