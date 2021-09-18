import { Component, OnInit } from "@angular/core"
import { Produto } from "../../model/produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";

@Component({
  selector: "app-loja",
  templateUrl: "./loja.pesquisa.component.html",
  styleUrls: ["./loja.pesquisa.component.css"]
})

export class LojaPesquisaComponent implements OnInit {

  private produtos: Produto[];

  ngOnInit(): void {

  }

  constructor(private produtoServico: ProdutoServico) {
    this.produtoServico.obterTodosProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
        },
        e => {
          console.log(e.error);
        }
      );
  }
}
