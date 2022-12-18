export class Entrenador {
  birth_date: Date | undefined;
  email!: string;
  id!: number;
  name!: string;
  pokemons!: Pokemon[];
  role!: string;
  surnames!: string;
}

export class Pokemon {
  id!: number;
  img!: string;
  name!: string;
  isChecked!: boolean;
  type!: string;
}
