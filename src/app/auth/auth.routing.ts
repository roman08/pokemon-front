import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistarEntrenadorComponent } from './registar-entrenador/registar-entrenador.component';
import { SeleccionarPokemonsComponent } from './seleccionar-pokemons/seleccionar-pokemons.component';



const routes: Routes = [
  // { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registrar-entrenador', component: RegistarEntrenadorComponent },
  { path: 'seleccionar-pokemons', component: SeleccionarPokemonsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
