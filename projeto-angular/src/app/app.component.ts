import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "";
  esconder = true;
  alterarNome(nome: any) {
    console.log(nome.target.value);
    this.nome = nome.target.value;
    console.log(nome);
  }
  adicionar(nomeInput: any) {
    console.log(nomeInput.value);
    console.log("nome local: " + this.nome);
    this.nome = nomeInput.value;
    console.log("Adicionando...");
    console.log("nome modif: " + this.nome);

  }
}
