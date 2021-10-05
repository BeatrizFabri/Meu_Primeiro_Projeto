import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  nomeInput = true;
  endeInput = true;
  cidadeInput = true;
  bairroInput = true;
  cepInput = true;
  telefoneInput = true;
  novo = false;
  alterar = false;
  excluir = false;
  procurar =false;
  gravar = true;
  cancelar = true;
  excluirRegistro = true;
  nome = "";
  esconder = true;
  alterarNome(nome: any) {
    console.log(nome.target.value);
    this.nome = nome.target.value;
    console.log(nome);
  }
  adicionar(nomeInput: any) {
    this.nomeInput = false;
    this.endeInput = false;
    this.cidadeInput = false;
    this.bairroInput = false;
    this.cepInput = false;
    this.telefoneInput = false;
    this.novo = true;
    this.alterar = true;
    this.excluir = true;
    this.procurar = true;
    this.gravar = false;
    this.cancelar = false;
  }
  gravarForm(){
    document.getElementById('nomeInput');
    console.log(document.getElementById('nomeInput')); 
  }
}
