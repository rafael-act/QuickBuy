import { Component, OnInit } from "@angular/core"
import { Produto } from "../model/produto"
import { ProdutoServico } from "../servicos/produto/produto.servico"


@Component({
  selector: "app-produto",//nomedatag
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})

export class ProdutoComponent implements OnInit {//nome das classes começando com maiusculo para convencao PascalCase

  public produto: Produto

  constructor(private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  public cadastrar() {
    //this.produto
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
        },
        e => {
          console.log(e.error);
          debugger;
        }
      )
  }
}
