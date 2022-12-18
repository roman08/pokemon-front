import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegistarEntrenadorComponent } from './registar-entrenador/registar-entrenador.component';
import { SeleccionarPokemonsComponent } from './seleccionar-pokemons/seleccionar-pokemons.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RegistarEntrenadorComponent,
    SeleccionarPokemonsComponent,
  ],
  exports: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
