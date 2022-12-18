import { Component, OnInit } from '@angular/core';
import { Entrenador } from 'src/app/models/entrenador.model';
import { EntrenadorService } from 'src/app/services/entrenador.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent implements OnInit {
  entrenadores: Entrenador[] = [];
  totalEntrenadores: number = 0;

  acero: number = 0;
  agua: number = 0;
  bicho: number = 0;
  dragon: number = 0;
  electrico: number = 0;
  fantasma: number = 0;
  fuego: number = 0;
  hada: number = 0;
  hielo: number = 0;
  lucha: number = 0;
  normal: number = 0;
  planta: number = 0;
  psiquico: number = 0;
  roca: number = 0;
  siniestro: number = 0;
  tierra: number = 0;
  veneno: number = 0;
  volador: number = 0;
  constructor(private _srvEntrenador: EntrenadorService) {}

  ngOnInit(): void {
    this._srvEntrenador.obtenerEntrenadores().subscribe((respuesta) => {
      const entrenadores = respuesta['entrenadores'];
      this.totalEntrenadores = entrenadores.length;
      for (let e of respuesta['entrenadores']) {
        let pokemons = JSON.parse(e.pokemons);
        this.setPokemons(pokemons);
      }
      // console.log(this.entrenadores[0].pokemons[0].img);
    });
  }

  setPokemons(pokemons: any[]) {
    let normal = pokemons.filter((p: { type: string }) => p.type == 'normal');
    this.normal = this.normal + normal.length;

    let acero = pokemons.filter((p: { type: string }) => p.type == 'steel');
    this.acero = this.acero + acero.length;

    let agua = pokemons.filter((p: { type: string }) => p.type == 'water');
    this.agua = this.agua + agua.length;

    let bicho = pokemons.filter((p: { type: string }) => p.type == 'bug');
    this.bicho = this.bicho + bicho.length;

    let dragon = pokemons.filter((p: { type: string }) => p.type == 'dragon');
    this.dragon = this.dragon + dragon.length;

    let electrico = pokemons.filter(
      (p: { type: string }) => p.type == 'electric'
    );
    this.electrico = this.electrico + electrico.length;

    let fantasma = pokemons.filter((p: { type: string }) => p.type == 'ghost');
    this.fantasma = this.fantasma + fantasma.length;
    let fuego = pokemons.filter((p: { type: string }) => p.type == 'fire');
    this.fuego = this.fuego + fuego.length;
    let hada = pokemons.filter((p: { type: string }) => p.type == 'fairy');
    this.hada = this.hada + hada.length;
    let hielo = pokemons.filter((p: { type: string }) => p.type == 'ice');
    this.hielo = this.hielo + hielo.length;
    let lucha = pokemons.filter((p: { type: string }) => p.type == 'fighting');
    this.lucha = this.lucha + lucha.length;

    let planta = pokemons.filter((p: { type: string }) => p.type == 'grass');
    this.planta = this.planta + planta.length;

    let psiquico = pokemons.filter(
      (p: { type: string }) => p.type == 'psychic'
    );
    this.psiquico = this.psiquico + psiquico.length;
    let roca = pokemons.filter((p: { type: string }) => p.type == 'rock');
    this.roca = this.roca + roca.length;
    let siniestro = pokemons.filter((p: { type: string }) => p.type == 'dark');
    this.siniestro = this.siniestro + siniestro.length;
    let tierra = pokemons.filter((p: { type: string }) => p.type == 'ground');
    this.tierra = this.tierra + tierra.length;
    let veneno = pokemons.filter((p: { type: string }) => p.type == 'poison');
    this.veneno = this.veneno + veneno.length;
    let volador = pokemons.filter((p: { type: string }) => p.type == 'flying');
    this.volador = this.volador + volador.length;
  }

  getProgreso1(num: number) {
    return `${num}%`;
  }
}
