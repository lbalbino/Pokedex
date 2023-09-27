import { Component } from '@angular/core';
import { Pokemon } from '../module/pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemonList: Pokemon[] = [
    new Pokemon(0, 'Raichu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png', 'Pokemon tipo Raio'),
    new Pokemon(1, 'Totodile', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png', 'Pokemon tipo Agua'),
    new Pokemon(2, 'Charmander', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png', 'Pokemon tipo Fogo')
  ];
  selectPokemon?: Pokemon;

  mostrarDetalhes(pokemon: Pokemon): void {
    this.selectPokemon = pokemon;
  }

  fecharModal(): void {
    this.selectPokemon = undefined;
  }
  
}
