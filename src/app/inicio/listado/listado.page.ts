// OSCAR JAVIER JIMENEZ CELIS
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  pokemons: any[] = [];
  offset = 0;
  limit = 20;  // Cantidad de Pokémon 

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.apiService.getPokemons(this.limit, this.offset).subscribe(data => {
      console.log(data);
      this.pokemons = this.pokemons.concat(data.results);
      this.offset += this.limit;  
    });
  }

  loadMore(event: any) {
    this.loadPokemons();
    event.target.complete();  // Finalizar el evento de scroll infinito
  }
}
