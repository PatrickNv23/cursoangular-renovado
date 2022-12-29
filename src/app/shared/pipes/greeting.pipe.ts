import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(name: string, gender: string, role: string = 'Usuario'): any {
    const greeting = (gender === 'F' ? 'Bienvenida' : 'Bienvenido')
    return `${greeting} ${name}, tienes permisos de ${role}`;
  }

}
