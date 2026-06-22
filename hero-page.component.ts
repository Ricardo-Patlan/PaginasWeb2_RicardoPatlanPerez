import { Component, signal } from '@angular/core';
//Aquí se importa el decorador Component y la función signal de Angular para crear un componente y manejar señales reactivas.
@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }
  // Esta función permite cambiar el nombre y la edad del héroe a "Spiderman" y 22 respectivamente.
  changeAge(): void {
    this.age.set(60);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
