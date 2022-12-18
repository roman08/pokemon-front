import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EntrenadorService } from 'src/app/services/entrenador.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { StorageService } from 'src/app/services/storage.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registar-entrenador',
  templateUrl: './registar-entrenador.component.html',
  styleUrls: ['./registar-entrenador.component.css'],
})
export class RegistarEntrenadorComponent implements OnInit {
  entrenadorForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _srvStorage: StorageService,
    private _srvEntrenador: EntrenadorService
  ) {
    this.entrenadorForm = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      fechaNacimiento: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  guardarEntrenador2() {
    // this._srvStorage.set('nombre', this.entrenadorForm.value['nombre']);
    // this._srvStorage.set('apellidos', this.entrenadorForm.value['apellidos']);
    // this._srvStorage.set('correo', this.entrenadorForm.value['correo']);
    // this._srvStorage.set(
    //   'fechaNacimiento',
    //   this.entrenadorForm.value['fechaNacimiento']
    // );

    // this.entrenadorForm.reset();
    // this.router.navigateByUrl('/seleccionar-pokemons');
  }

  guardarEntrenador() {
    const pokemons = JSON.stringify([]);
    const nombre = this.entrenadorForm.value['nombre'];
    const apellidos = this.entrenadorForm.value['apellidos'];
    const correo = this.entrenadorForm.value['correo'];
    const fechaNacimiento = this.entrenadorForm.value['fechaNacimiento'];

    let data = {
      pokemons: pokemons,
      name: nombre,
      surnames: apellidos,
      email: correo,
      birth_date: fechaNacimiento,
      role: 'Usuario',
    };
    this._srvEntrenador.guardarEntrenador(data).subscribe((respuesta) => {
      if (respuesta['status'] === 'error') {
        let errores = respuesta['data']['email'][0];
        swal.fire( 'Alerta',errores, 'error');
        
      }else {
        this._srvStorage.set('idEntrenador', respuesta['repuesta']['id']);
        swal.fire( 'Alerta', 'Registro exitoso...', 'success');
        this.entrenadorForm.reset();
        this.router.navigateByUrl('/seleccionar-pokemons');
      }
      // this.router.navigateByUrl('/');tsubasa_80@hotmail.com
    });
  }

  get nombre() {
    return this.entrenadorForm.get('nombre');
  }

  get apellidos() {
    return this.entrenadorForm.get('apellidos');
  }

  get correo() {
    return this.entrenadorForm.get('correo');
  }

  get fechaNacimiento() {
    return this.entrenadorForm.get('fechaNacimiento');
  }
}
