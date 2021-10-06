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
  nomeInput: any = true;
  endeInput: any = true;
  cidadeInput: any = true;
  bairroInput: any = true;
  cepInput: any = true;
  telefoneInput: any = true;
  novo = false;
  alterar = false;
  excluir = false;
  procurar = false;
  gravar = true;
  cancelar = true;
  excluirRegistro = true;
  inputProcurar = true;
  userForm = new FormGroup({
    nome: new FormControl(''),
    ende: new FormControl(''),
    bairro: new FormControl(''),
    cep: new FormControl(''),
    telefone: new FormControl(''),
    cidade: new FormControl(''),
  });
  adicionar() {
    this.nomeInput = null;
    this.endeInput = null;
    this.cidadeInput = null;
    this.bairroInput = null;
    this.cepInput = null;
    this.telefoneInput = null;
    this.novo = true;
    this.alterar = true;
    this.excluir = true;
    this.procurar = true;
    this.gravar = false;
    this.cancelar = false;
    this.excluirRegistro = true;
    this.inputProcurar = true;
  }
  gravarForm() {
    this.userForm.reset();
    this.nomeInput = true;
    this.endeInput = true;
    this.cidadeInput = true;
    this.bairroInput = true;
    this.cepInput = true;
    this.telefoneInput = true;
    this.novo = false;
    this.alterar = false;
    this.excluir = false;
    this.procurar = false;
    this.gravar = true;
    this.cancelar = true;
    this.excluirRegistro = true;
    this.inputProcurar = true;
  }
  cancelarForm() {
    this.userForm.reset();
    this.nomeInput = true;
    this.endeInput = true;
    this.cidadeInput = true;
    this.bairroInput = true;
    this.cepInput = true;
    this.telefoneInput = true;
    this.novo = false;
    this.alterar = false;
    this.excluir = false;
    this.procurar = false;
    this.gravar = true;
    this.cancelar = true;
    this.excluirRegistro = true;
    this.inputProcurar = true;
  }
  alterarForm() {
    this.nomeInput = null;
    this.endeInput = null;
    this.cidadeInput = null;
    this.bairroInput = null;
    this.cepInput = null;
    this.telefoneInput = null;
    this.novo = true;
    this.alterar = true;
    this.excluir = true;
    this.procurar = true;
    this.gravar = false;
    this.cancelar = false;
    this.excluirRegistro = true;
    this.inputProcurar = true;
  }
  excluirForm() {
    this.novo = true;
    this.alterar = true;
    this.excluir = true;
    this.procurar = true;
    this.gravar = true;
    this.cancelar = false;
    this.excluirRegistro = false;
    this.inputProcurar = true;
  }
  excluirRegistroForm() {
    this.userForm.reset();
    this.nomeInput = true;
    this.endeInput = true;
    this.cidadeInput = true;
    this.bairroInput = true;
    this.cepInput = true;
    this.telefoneInput = true;
    this.novo = false;
    this.alterar = false;
    this.excluir = false;
    this.procurar = false;
    this.gravar = true;
    this.cancelar = true;
    this.excluirRegistro = true;
    this.inputProcurar = true;
  }
  procurarForm(inputProcurar: any) {
    if (inputProcurar == false) {
      this.cancelarForm();
    } else {
      this.novo = true;
      this.alterar = true;
      this.excluir = true;
      this.procurar = false;
      this.gravar = true;
      this.cancelar = true;
      this.excluirRegistro = true;
      this.inputProcurar = false;
    }
  }
}
