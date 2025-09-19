import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CadastroUsuario } from './app/cadastro-usuario/cadastro-usuario';
import { TelaLogin } from './app/tela-login/tela-login';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CadastroUsuario, TelaLogin],
  template: `
    
    <app-tela-login></app-tela-login>
    <!-- <app-cadastro-usuario></app-cadastro-usuario> -->

  `,
})

export class App {
  name = 'Angular';
}

bootstrapApplication(App);
