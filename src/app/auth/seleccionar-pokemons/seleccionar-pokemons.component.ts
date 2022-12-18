import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrenadorService } from 'src/app/services/entrenador.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { StorageService } from 'src/app/services/storage.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-seleccionar-pokemons',
  templateUrl: './seleccionar-pokemons.component.html',
  styleUrls: ['./seleccionar-pokemons.component.css'],
})
export class SeleccionarPokemonsComponent implements OnInit {
  pokemones: any[] = [];
  selectedItemsList: any[] = [];
  // let pokemos = JSON.stringify(this.selectedItemsList);
  constructor(
    private _srvPokemon: PokemonService,
    private router: Router,
    private _srvStorage: StorageService,
    private _srvEntrenador: EntrenadorService
  ) {}

  ngOnInit(): void {
    console.log(this._srvStorage.get('idEntrenador'));

    // swal.fire('Registro exitoso...', 'Alerta', 'success');
    this.obtenerPokemons(150);
  }

  obtenerPokemons(total: number) {
    for (let i = 1; i <= total; i++) {
      this._srvPokemon.getPokemons(i).subscribe(
        (res) => {
          this.pokemones.push({
            id: i,
            img: res.sprites.front_default,
            name: res.name,
            type: res.types[0].type.name,
            isChecked: false,
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  changeSelection() {
    this.fetchSelectedItems();
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.pokemones.filter((value, index) => {
      return value.isChecked;
    });
  }

  guardarDatos() {
    const totalPokemons = this.selectedItemsList.length;
    if (totalPokemons > 6 || totalPokemons < 6) {
      swal.fire(
        'Alerta',
        'Debes seleccionar 6 pokémos actualmente tienes: ' + totalPokemons,
        'error'
      );
    }
    const pokemons = JSON.stringify(this.selectedItemsList);
    const id = JSON.parse(this._srvStorage.get('idEntrenador'));

    let data = {
      pokemons: pokemons,
      id: id
    };
    this._srvEntrenador.actualizarEntrenador(data).subscribe( respuesta => {
      if(respuesta['status'] === 'success'){
        swal.fire(
          'Alerta',
          'Tus pokémons se guardaron correctamente',
          'success'
        );
        this._srvStorage.remove('idEntrenador');
        this.router.navigateByUrl('/');
      }else{
        swal.fire(
          'Alerta',
          'Error al guardar tus pokémons intentalo de nuevo',
          'success'
        );

      }
      
    });
  }
}
