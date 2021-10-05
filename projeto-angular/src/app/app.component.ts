import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  procurar = false;
  gravar = true;
  cancelar = true;
  excluirRegistro = true;
  userForm = new FormGroup({
    nome: new FormControl(''),
    ende: new FormControl(''),
    bairro: new FormControl(''),
    cep: new FormControl(''),
    telefone: new FormControl(''),
    cidade: new FormControl(''),
  });

  alterarNome(nome: any) {
    console.log(nome.target.value);
    //   this.userForm.nome = nome.target.value;
    console.log(nome);
  }
  adicionar() {
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
  gravarForm() {
    this.userForm.reset();
    // console.log(this.userForm.get('nome') !== null ? this.userForm.get('nome')?.value: null);

  }
  cancelarForm() {
    this.userForm.reset();
  }
}
