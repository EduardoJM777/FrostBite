import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CadastroUsuario } from './app/cadastro-usuario/cadastro-usuario';
import { TelaLogin } from './app/tela-login/tela-login';
import { Pedidos } from './app/pedidos/pedidos';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CadastroUsuario, TelaLogin, Pedidos],
  template: `
    
    <!-- <app-tela-login></app-tela-login>
    <app-cadastro-usuario></app-cadastro-usuario> -->
    <app-pedidos></app-pedidos>

  `,
})

export class App {
  name = 'Angular';
}

bootstrapApplication(App);
