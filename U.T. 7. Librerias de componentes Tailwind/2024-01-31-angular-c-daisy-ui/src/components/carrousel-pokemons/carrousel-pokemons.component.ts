import { Component } from '@angular/core';
import { CardPokemonComponent } from '../card-pokemon/card-pokemon.component';

@Component({
  selector: 'carrousel-pokemons',
  standalone: true,
  imports: [CardPokemonComponent],
  templateUrl: './carrousel-pokemons.component.html',
})
export class CarrouselPokemonsComponent {

}
