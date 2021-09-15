import {Component } from "@angular/core"

@Component({
  selector: "app-produto",//nomedatag
  template: "./produto.component.html",
  styleUrls:["./produto.component.css"]
})

export class ProdutoComponent {//nome das classes começando com maiusculo para convencao PascalCase

  /*convenção camelCase para variáveis, atributos e nomes da funções*/
  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    return "Samsung";
  }
}
